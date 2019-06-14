const express = require('express');
const app = express();
require('dotenv').config()

const axios = require('axios');

const port = process.env.PORT || 3001;

const nps = "https://developer.nps.gov/api/v1";

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});


app.get('/api/state', (req, res) => {

    axios.get(nps + "/campgrounds", { params: { stateCode: req.query.statecode, parkCode: req.query.parkcode, api_key: process.env.API_KEY } })
        .then(function (response) {
            // handle success
            //console.log(response.data);
            data = response.data;
            res.send(data);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

});

app.get('/api/alerts', (req, res) => {




});

app.get('/api/articles', (req, res) => {




});

app.get('/api/events', (req, res) => {




});

app.get('/api/lessonplans', (req, res) => {




});

app.get('/api/newsreleases', (req, res) => {




});

app.get('/api/parks', (req, res) => {




});

app.get('/api/people', (req, res) => {




});

app.get('/api/places', (req, res) => {




});

app.get('/api/visitorcenters', (req, res) => {




});
