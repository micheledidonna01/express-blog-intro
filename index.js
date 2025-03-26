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

    const menu = [
        {
           titolo : "ciambellone",
           contenuto : "ciambella soffice e genuina",
           immagine : "img/bacheca/ciambellone.jpeg",
           tags : ['morbida', 'genuina'] 
        },
        {
           titolo : "cracker alla barbabietola",
           contenuto : "cracker dolci con impasto di barbabietola",
           immagine : "img/bacheca/cracker_barbabietola.jpeg",
           tags : ['croccante'] 
        },
        {
           titolo : "pane fritto",
           contenuto : "pane fritto dolce",
           immagine : "img/bacheca/pane_fritto_dolce.jpeg",
           tags : ['morbido'] 
        },
        {
           titolo : "pasta barbabietola",
           contenuto : "pasta dolce con impasto di barbabietola",
           immagine : "img/bacheca/pasta_barbabietola.jpeg",
           tags : ['unica', 'speziata'] 
        },
        {
           titolo : "torta paesana",
           contenuto : "ricetta tipica della torta di paese",
           immagine : "img/bacheca/torta_paesana.jpeg",
           tags : ['cuore morbido', 'ricoperto al cioccolato'] 
        },
    ]
    res.type('JSON').send(menu);
});

app.listen(port, () => {
    console.log(`Sono un server sulla porta ${port}`);
});

