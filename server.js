const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const gzippo = require('gzippo');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(gzippo.staticGzip(path.join(__dirname, '/dist')));

app.get('/api', (req, res) =>{ 
    res.send('API Works');
});


app.get('*', (req,res) => { 
    res.sendFile("index.html");
});

const PORT = process.env.PORT || 5000;
app.set('port', PORT);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});