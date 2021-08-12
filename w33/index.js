const express = require('express');
const app = express();

app.listen(3000, () => { console.log('[INFO] The server is ready at port 3000') });

//Routing

app.get('/', (req, res) => {
    res.send('Welcome to our home page');
    console.log('[INFO] Home req');
})

app.get('/cats', (req, res) => {
    res.send('This is a Cats page');
    console.log('[INFO] This was a CAT req');
})

app.get('/dogs', (req, res) => {
    res.send('This is a Dogs page');
    console.log('[INFO] This was DOG req');
})

// app.get('/:page', (req, res) => {
//     const { page } = req.params;
//     console.log(`[INFO] This is a ${page} request`);
//     res.send(`This is a ${page} page`);
// })

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        console.log('[INFO] nothing searched!');
        res.send('Nothing found if nothing searched');
    } else {
        console.log(`[INFO] ${q} is searched`);
        res.send(`Something found for search query ${q}`);
    }
})

app.get('*', (req, res) => {
    console.log('[INFO] weird page');
    res.send('Weird Page {404} lmao');
})

// app.use((req, res) => {
//     res.send('Welcome to my page');
// })