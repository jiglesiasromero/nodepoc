"use strict";

var assert = require("assert");
var request = require("request");
var expect = require('chai').expect;

// --------------------------
// Gauge step implementations
// --------------------------

step("Search a random listing id for <city>", function(cityGiven) {
    // return cy.request('http://staging.spotahome.com/api/search/markers/' + cityGiven + '?type[]=rooms?topology[]=2')
    //     .then((response) => {
    //     expect(response.status).to.eq(200)
    // let randomId = Math.floor(Math.random() * 100)
    // let identifier = response.body.data[randomId].id
    // //return response.body.data[randomId].id
    // expect(identifier).to.not.be.null
    // expect(identifier).to.not.be.undefined
    // console.log('identifier is ' + identifier)
    assert.equal(cityGiven, "madrid");
    var pepe = {
        headers: {'Content-Type' : 'application/json'},
        url: 'http://staging.spotahome.com/api/booking-leads',
        json: {tenantName: 'Pepe Iglesias',
            tenantEmail: 'tenant@email.com',
            tenantPhone: '666999000',
            tenantBirthday: '1984-03-25',
            tenantGender: 'male',
            tenantCountry: 'es',
            checkIn:'2018-01-26',
            checkOut:'2018-06-24',
            listing: '104421'}
    };
    console.log("HELLO1");

    request.post(pepe, function(error, response, body) {
        expect(response.statusCode).to.equal(201);
        // let bodyObj = JSON.parse(body);
        console.log(response.headers.location);
        console.log("HELLO");
        var location = response.headers.location;
        this.id = location.split("/")[3];
        console.log('inner id ' + id);
        done();
    })
})