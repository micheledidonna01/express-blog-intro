const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('Sto chiamando la rotta principale');

    res.send('Server del mio blog');
});

app.get('/bacheca', (req, res) => {
    console.log('Sto chiamando i dolci della pasticceria');

    res.type('JSON').send(menu);
});

app.listen(port, () => {
    console.log(`Sono un server sulla porta ${port}`);
});


const menu = require("./menu.js");