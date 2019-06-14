const express = require('express');
const app = express();
require('dotenv').config()

const axios = require('axios');

const port = process.env.PORT || 3001;

const nps = "developer.nps.gov/api/v1";

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});


app.get('/api/state', (req, res) => {

    axios.get(nps + "/campgrounds", { params: { stateCode: req.query.id, api_key: process.env.API_KEY } })
        .then(function (response) {
            // handle success
            console.log(response);
            res.send(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

})