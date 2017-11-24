'use strict';

const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

// Define Routes for app
app.get('/', function(req, res) {
    res.send('Hello World, League is Awesome');
});

app.listen(port, () => {console.log('Listening on '); });