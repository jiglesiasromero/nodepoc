import should from 'should';
import request from 'request';
var expect = require('chai').expect;
var util = require('util');

var baseUrl = 'https://swapi.co/api';
var baseUrlSah = 'https://staging.bookings.spotahome.com'

describe('returns luke', function() {
    before(() => {
      this.id = 10
    });

    it('returns luke', async () => {
      let response
      try {
        response = await request.get({ url: `${baseUrl}/people/1/` })
      } catch (e) {
        console.log('err', e)
        throw e
      }

      console.log(response.body)




            // 		var bodyObj = JSON.parse(body);
            // 		expect(bodyObj.name).to.equal("Luke Skywalker");
            // 		expect(bodyObj.hair_color).to.equal("blond");
            //         expect(response.statusCode).to.equal(200);
            //         console.log(response.headers.date);
            //         console.log(body);
            //     done();
            // });
    });

    // it('returns walker', () => {
    //     console.log(this.id)
    // });

    // it('Create a booking lead', function(done) {
    //     //var id = 6;
    //     var pepe = {
    //         headers: {'Content-Type' : 'application/json'},
    //         url: baseUrlSah + '/api/booking-leads',
    //         json: {tenantName: 'Pepe Iglesias',
    //             tenantEmail: 'tenant@email.com',
    //             tenantPhone: '666999000',
    //             tenantBirthday: '1984-03-25',
    //             tenantGender: 'male',
    //             tenantCountry: 'es',
    //             checkIn:'2018-01-26',
    //             checkOut:'2018-06-24',
    //             listing: '104421'}
    //     };
    //
    //     request.post(pepe, function(error, response, body) {
    //         expect(response.statusCode).to.equal(201);
    //         // let bodyObj = JSON.parse(body);
    //         console.log(response.headers.location);
    //         var location = response.headers.location;
    //         this.id = location.split("/")[3];
    //         console.log('inner id ' + id);
    //         done();
    //     })//.then()
    //
    //     request.get({ url: baseUrlSah + '/api/booking-leads/' + id }, function(error, response, body) {
    //         var bodyObj = JSON.parse(body);
    //         //expect(response.statusCode).to.equal(200);
    //         console.log(body);
    //         done();
    //     });
    //
    // });

});
