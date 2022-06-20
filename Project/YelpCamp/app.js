const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// template functions
const ejsMate = require('ejs-mate');
// Create a session middleware
const session = require('express-session');
const flash = require('connect-flash');

// error handling
const expressError = require('./utils/expressError');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');

// express.Router
const campgrounds = require('./routes/campgrounds');
const reviews = require('./routes/reviews')

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Database connected");
});

const app = express();
// setup view engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

const sessionConfig = {
    // The session secret is a key used for signing and/or encrypting cookies set by the application to maintain session state.
    // In practice, this is often what prevents users from pretending to be someone they’re not -- ensuring that random person on the internet cannot access your application as an administrator.
    secret: "secretOfNeilll",
    // Forces the session to be saved back to the session store, even if the session was never modified during the request.
    // Typically false
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 24 * 7, // expires in a week
        maxAge: 1000 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use('/campgrounds', campgrounds);
app.use('/campgrounds/:id/reviews', reviews);

app.get('/', (req, res) => {
    res.render('home');
})


app.all('*', (req, res, next) => {
    // //set the appropriate HTTP header
    // res.setHeader('Content-Type', 'text/html');
    // const url = req.originalUrl;
    // res.write('<p><span style="font-weight: bold; font-size: 30px"> 404 </span>' + '<span style="color:#808080">That’s an error. </span></p>');
    // res.write("<p> The requested URL " + url + " was not found on this server. That’s all we know. </p>");
    // res.send()
    const url = req.originalUrl;
    const message = "The requested URL " + url + " was not found on this server."
    next(new expressError(message, 404));
    // next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
    // const { statusCode = 500, message = "SOMETHING WENT WRONG!" } = err;
    // // res.status(statusCode).send(message);
    // res.status(statusCode).render('error', { err });
    const { statusCode = 500 } = err;
    if (!err.message)
        err.message = 'SOMETHING WENT WRONG!'
    res.status(statusCode).render('error', { err })
})

app.listen(3000, () => {
    console.log("Serving ON PORT 3000!")
})
