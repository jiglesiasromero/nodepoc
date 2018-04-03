"use strict";

const axios = require("axios");

step("Do stufff", function() {
    axios.get('http://staging.spotahome.com/api/search/markers/barcelona?type[]=rooms?topology[]=2')
        .then(function (response) {
            console.log(response.data.data[0]);
        })
        .catch(function (error) {
            console.log(error);
        });
})