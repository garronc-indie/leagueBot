'use strict';
const express = require('express');
const request = require('request');

const port = process.env.PORT || 3000;
const app = express();
const API_KEY = 'RGAPI-d81a69c6-422a-4668-a87d-3889e0fdf657';

// Define Routes for app
app.get('/', function(req, res) {
    res.send('Hello World, League is Awesome');
});

app.get('/summoner/:name', function(req, res) {
    const summoner = req.params.name;
    let requestBase = `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summoner}?api_key=${API_KEY}`;

    request(requestBase, {json: true }, function(error, response, body) {
        if (error) { console.log(error); }
        console.log(body.name);
        console.log(body.summonerLevel);
        res.send(`${body.name} is level ${body.summonerLevel}. Good for them!`);
    });
});

app.listen(port, () => {console.log(`Listening on ${port}`); });