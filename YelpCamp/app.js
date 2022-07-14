// Node.js assumes it's always running in a development environment.
if (process.env.NODE_ENV !== "production") {
  // dotenv loads environment variables from a .env file into process.env.
  // Storing configuration in the environment separate from code
  require("dotenv").config();
}

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// template functions
const ejsMate = require("ejs-mate");
// Create a session middleware
const session = require("express-session");
const flash = require("connect-flash");
// error handling
const expressError = require("./utils/expressError");
const methodOverride = require("method-override");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
// express.Router
const userRoutes = require("./routes/users");
const campgroundRoutes = require("./routes/campgrounds");
const reviewRoutes = require("./routes/reviews");
// express-mongo-sanitize searches for any keys in objects that begin with a $ sign or contain a ., from req.body, req.query or req.params.
const mongoSanitize = require('express-mongo-sanitize');
// Helmet helps you secure your Express apps by setting various HTTP headers
const helmet = require("helmet");
// session store
const MongoStore = require('connect-mongo');

// MongoDB Cloud
// const dbUrl = process.env.DB_URL;
const dbUrl = "mongodb://localhost:27017/yelp-camp" || process.env.DB_URL;

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();
// setup view engine
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(mongoSanitize());

const secret = process.env.SECRET || 'thisshouldbeabettersecret!';

const store = MongoStore.create({
  mongoUrl: dbUrl,
  // Don't resave all the session on database every single time that the user refresh the page, you can lazy update the session, by limiting a period of time.
  touchAfter: 24 * 60 * 60,
  crypto: {
      // secret: secret
      secret
  }
});

store.on('error', function(e) {
  console.log("SESSION STORE ERROR", e)
})

// session data: The set of session variables held on a server that allow the continuation of a conversation with the client without the need to continually reinput data.
const sessionConfig = {
  // use mongo to store session information
  store,
  name: 'session',
  // The session secret is a key used for signing and/or encrypting cookies set by the application to maintain session state.
  // In practice, this is often what prevents users from pretending to be someone they’re not -- ensuring that random person on the internet cannot access your application as an administrator.
  // secret: "secretOfNeilll",
  secret,
  // Forces the session to be saved back to the session store, even if the session was never modified during the request.
  // Typically false
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 24 * 7, // expires in a week
    maxAge: 1000 * 60 * 24 * 7,
  },
};

// app.use(helmet());
// safari doesn't support src
const scriptSrcUrls = [
  "https://stackpath.bootstrapcdn.com/",
  "https://api.tiles.mapbox.com/",
  "https://api.mapbox.com/",
  "https://kit.fontawesome.com/",
  "https://cdnjs.cloudflare.com/",
  "https://cdn.jsdelivr.net/",
  "https://res.cloudinary.com/YOUR_CLOUDINARY_ACCOUNT/"
];
const styleSrcUrls = [
  "https://kit-free.fontawesome.com/",
  "https://stackpath.bootstrapcdn.com/",
  "https://api.mapbox.com/",
  "https://api.tiles.mapbox.com/",
  "https://fonts.googleapis.com/",
  "https://use.fontawesome.com/",
  "https://cdn.jsdelivr.net/",
  "https://res.cloudinary.com/YOUR_CLOUDINARY_ACCOUNT/"
];
const connectSrcUrls = [
  "https://*.tiles.mapbox.com",
  "https://api.mapbox.com",
  "https://events.mapbox.com",
  "https://res.cloudinary.com/YOUR_CLOUDINARY_ACCOUNT/"
];
const fontSrcUrls = [ "https://res.cloudinary.com/YOUR_CLOUDINARY_ACCOUNT/" ];

app.use(
  helmet({
      contentSecurityPolicy: {
          directives : {
              defaultSrc : [],
              connectSrc : [ "'self'", ...connectSrcUrls ],
              scriptSrc  : [ "'unsafe-inline'", "'self'", ...scriptSrcUrls ],
              styleSrc   : [ "'self'", "'unsafe-inline'", ...styleSrcUrls ],
              workerSrc  : [ "'self'", "blob:" ],
              objectSrc  : [],
              imgSrc     : [
                  "'self'",
                  "blob:",
                  "data:",
                  "https://res.cloudinary.com/stuof3l/", //SHOULD MATCH YOUR CLOUDINARY ACCOUNT!
                  "https://images.unsplash.com/"
              ],
              fontSrc    : [ "'self'", ...fontSrcUrls ],
              mediaSrc   : [ "https://res.cloudinary.com/dlzez5yga/" ],
              childSrc   : [ "blob:" ]
          }
      },
      crossOriginEmbedderPolicy: false
  })
);

app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
// passport.session() goes after session()
app.use(passport.session());
// Passport-Local Mongoose supports this setup by implementing a LocalStrategy and serializeUser/deserializeUser functions.
// authenticate() generates a function that is used in Passport's LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));
// serializeUser() Generates a function that is used by Passport to serialize users into the session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  console.log(req.session);
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.use("/", userRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.all("*", (req, res, next) => {
  // //set the appropriate HTTP header
  // res.setHeader('Content-Type', 'text/html');
  // const url = req.originalUrl;
  // res.write('<p><span style="font-weight: bold; font-size: 30px"> 404 </span>' + '<span style="color:#808080">That’s an error. </span></p>');
  // res.write("<p> The requested URL " + url + " was not found on this server. That’s all we know. </p>");
  // res.send()
  const url = req.originalUrl;
  const message = "The requested URL " + url + " was not found on this server.";
  next(new expressError(message, 404));
  // next(new ExpressError('Page Not Found', 404))
});

app.use((err, req, res, next) => {
  // const { statusCode = 500, message = "SOMETHING WENT WRONG!" } = err;
  // // res.status(statusCode).send(message);
  // res.status(statusCode).render('error', { err });
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "SOMETHING WENT WRONG!";
  res.status(statusCode).render("error", { err });
});

// the port is different on Heroku
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})