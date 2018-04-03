const axios = require("axios");

step("Do stuff", async function() {
    // console.log("HOLA");
    // const url =
    //     "http://staging.spotahome.com/api/search/markers/barcelona?type[]=rooms?topology[]=2";
    // const getLocation = async url => {
    //     try {
    //         const response = await axios.get(url);
    //         const data = response.data;
    //         const statusCode = response.data;
    //         console.log('Status code:'+ statusCode);
    //         // var city = data.results[0].formatted_address;
    //         //     console.log(
    //         //     'City:' + city
    //         // );
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    //
    // getLocation(url);

    const response = await axios.get('http://staging.spotahome.com/api/search/markers/barcelona?type[]=rooms?topology[]=2')

    console.log(response);

    // async function getUser() {
    //     try {
    //         const response = await axios.get('http://staging.spotahome.com/api/search/markers/barcelona?type[]=rooms?topology[]=2');
    //         console.log(response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    //
    // getUser()

    // request
    // .get('http://staging.spotahome.com/api/search/markers/barcelona?type[]=rooms?topology[]=2')
    //     .then(response => {
    //         assert.equal(response.status,"200")

    // .on('response', function(response) {
    //     console.log(response.statusCode) // 200
    //     console.log(response.headers['content-type']) // 'image/png'
    //     console.log(response.body)
    // });
});


