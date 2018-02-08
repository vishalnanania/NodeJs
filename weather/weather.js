const request = require('request');

var weatherInfo = (lat, lan, callback) => {
    request({
        url: `https://api.darksky.net/forecast/d100030cc35632ebe0c5cc4d247701a8/${lat},${lan}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200){
            callback(body);
        }else {
            console.log('Unable to fetch weather');
        }
    });
}

module.exports = {
    weatherInfo
};