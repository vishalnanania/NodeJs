const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

var argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'address to fetch weather',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (res) => {
    weather.weatherInfo(res.lat, res.lat, (weatherInfo)=>{
        console.log(`weather info: ${JSON.stringify(weatherInfo.currently)}`);
    });    
});