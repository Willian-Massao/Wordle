const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.set('view engine', 'ejs');
app.set('views', './view');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',async (req, res) => {
    res.render('index');
});

app.post('/words',async (req, res)=>{
    try {
        const response = await axios.post('http://wordle-api.vercel.app/api/wordle', { "guess": req.body.guess });
        res.json(response.data);
    } catch (error) {
        console.error(error);
    }
});

app.listen(8000, function() {
    console.log('Listening on port 8000');
});