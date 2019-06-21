const express = require('express');
const app = express();
require('dotenv').config()

const axios = require('axios');

const port = 5000;

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
            res.send(error);
        });

});

app.get('/api/alerts', (req, res) => {
    axios.get(nps + "/alerts", { params: { stateCode: req.query.stateCode, parkCode: req.query.parkCode, api_key: process.env.API_KEY } })
        .then(function (response) {
            // handle success
            //console.log(response.data);
            //console.log("parkcode is" + req.query.stateCode);
            data = response.data;
            res.send(response.data);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });





});

app.get('/api/articles', (req, res) => {
    axios.get(nps + "/articles", { params: { stateCode: req.query.stateCode, parkCode: req.query.parkCode, api_key: process.env.API_KEY } })
        .then(function (response) {
            // handle success
            //console.log(response.data);
            //console.log("parkcode is" + req.query.stateCode);
            data = response.data;
            res.send(response.data);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });



});

app.get('/api/events', (req, res) => {
    axios.get(nps + "/events", { params: { stateCode: req.query.stateCode, parkCode: req.query.parkCode, api_key: process.env.API_KEY } })
        .then(function (response) {
            // handle success
            //console.log(response.data);
            //console.log("parkcode is" + req.query.stateCode);
            data = response.data;
            res.send(response.data);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
});

app.get('/api/lessonplans', (req, res) => {
    axios.get(nps + "/lessonplans", { params: { stateCode: req.query.stateCode, parkCode: req.query.parkCode, api_key: process.env.API_KEY } })
        .then(function (response) {
            // handle success
            //console.log(response.data);
            //console.log("parkcode is" + req.query.stateCode);
            data = response.data;
            res.send(response.data);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });



});

app.get('/api/newsreleases', (req, res) => {
    axios.get(nps + "/newsreleases", { params: { stateCode: req.query.stateCode, parkCode: req.query.parkCode, api_key: process.env.API_KEY } })
        .then(function (response) {
            // handle success
            //console.log(response.data);
            //console.log("parkcode is" + req.query.stateCode);
            data = response.data;
            res.send(response.data);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });




});

app.get('/api/parks', (req, res) => {
    axios.get(nps + "/parks", { params: { q: req.query.q, stateCode: req.query.stateCode, parkCode: req.query.parkCode, fields: req.query.fields, api_key: process.env.API_KEY } })
        .then(function (response) {
            // handle success
            //console.log(response.data);
            //console.log("parkcode is" + req.query.stateCode);
            data = response.data;
            res.send(response.data);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });




});

app.get('/api/people', (req, res) => {
    axios.get(nps + "/people", { params: { stateCode: req.query.stateCode, parkCode: req.query.parkCode, api_key: process.env.API_KEY } })
        .then(function (response) {
            // handle success
            //console.log(response.data);
            //console.log("parkcode is" + req.query.stateCode);
            data = response.data;
            res.send(response.data);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });




});

app.get('/api/places', (req, res) => {
    axios.get(nps + "/places", { params: { stateCode: req.query.stateCode, parkCode: req.query.parkCode, api_key: process.env.API_KEY } })
        .then(function (response) {
            // handle success
            //console.log(response.data);
            //console.log("parkcode is" + req.query.stateCode);
            data = response.data;
            res.send(response.data);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });





});

app.get('/api/visitorcenters', (req, res) => {
    axios.get(nps + "/visitorcenters", { params: { stateCode: req.query.stateCode, parkCode: req.query.parkCode, api_key: process.env.API_KEY } })
        .then(function (response) {
            // handle success
            //console.log(response.data);
            //console.log("parkcode is" + req.query.stateCode);
            data = response.data;
            res.send(response.data);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });



});

app.get('/api/campgrounds', (req, res) => {
    axios.get(nps + "/campgrounds", { params: { stateCode: req.query.stateCode, parkCode: req.query.parkCode, api_key: process.env.API_KEY } })
        .then(function (response) {
            // handle success
            //console.log(response.data);
            //console.log("parkcode is" + req.query.stateCode);
            data = response.data;
            res.send(response.data);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });

}