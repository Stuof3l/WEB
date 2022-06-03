const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        username: "todd",
        comment: "Hello World!"
    },
    {
        username: "Skyler",
        comment: "I like the weather today"
    },
    {
        username: "Tommy",
        comment: "I love this world"
    },
    {
        username: "WHHHHat",
        comment: "What are you guys doing?"
    }
]

app.get('/comments', (req, res)=>{
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res)=>{
    res.render('comments/new')
})

app.post('/comments', (req, res)=>{
    const {username, comment} = req.body;
    comments.push({username, comment});
    // res.send("It worked!");
    res.redirect('/comments')
})

app.get('/tacos', (req, res)=>{
    res.send('GET /tacos response')
})

app.post('/tacos', (req, res)=>{
    console.log(req.body)
    res.send('POST /tacos response')
})

app.listen(3000, ()=>{
    console.log("LISTENING ON PORT 3000!")
})