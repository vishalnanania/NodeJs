const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (body.status == "OVER_QUERY_LIMIT") console.log('Try again');
        if (body.status == "ZERO_RESULTS") console.log('invalid address');
        else if (body.status == "OK") {
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
            var resData = {
                lat: body.results[0].geometry.location.lat, 
                lan: body.results[0].geometry.location.lan
            }
            callback(resData);
        }
    });
}

module.exports = {
    geocodeAddress
};