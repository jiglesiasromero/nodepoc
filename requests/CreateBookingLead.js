module.exports = function createBookingLead (payload) {
  request.post(payload, function (error, response, body) {
      expect(response.statusCode).to.equal(201);
      // let bodyObj = JSON.parse(body);
      console.log(response.headers.location);
      var location = response.headers.location;
      this.id = location.split("/")[3];
      console.log('inner id ' + id);
      done();
  });
}
