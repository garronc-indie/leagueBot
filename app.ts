'use strict';

const express = require('express');

const app = express();

// Define Routes for app
app.get('/', function(req, res) {
    res.send('Hello World, League is Awesome');
});

app.listen('3000', () => {console.log('Listening'); });