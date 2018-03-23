var should = require('should');
var request = require('request');
var expect = require('chai').expect;
var baseUrl = 'https://swapi.co/api';
var baseUrlSah = 'https://staging.bookings.spotahome.com';
var util = require('util');
require('../requests/CreateBookingLead');

describe('returns luke', function() {
    this.timeout(20000);

    var payload = {
        headers: {'Content-Type' : 'application/json'},
        url: baseUrlSah + '/api/booking-leads',
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

    createBookingLead(payload)

});