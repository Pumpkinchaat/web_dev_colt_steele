const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const redditData = require('././code/Templating_Demo/data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
    console.log(`The Server is now listening on PORT: ${PORT}`);
})

app.get('/cats', (req, res) => {
    const cats = ['Luna', 'Charlie', 'Monty', 'Billo', 'Gori Ma\'am', 'Kallua'];
    res.render('cats.ejs', { cats });
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 100);
    const even = (num % 2 == 0) ? true : false;
    res.render('rand.ejs', { num, even });
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    if (!redditData[subreddit]) {
        res.render('404.ejs', { subreddit });
    } else {
        res.render('subreddit.ejs', {...redditData[subreddit] });
    }
})

app.get('/', (req, res) => {
    res.render('home.ejs');
})