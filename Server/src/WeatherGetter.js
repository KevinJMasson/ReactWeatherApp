import {config} from '../config.js';

async function getWeather(location) {
    var key = config.API_KEY;
    try {
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=' + key + '&q=' + location + "&aqi=no", {
        mode: 'cors'
        });
        const data = await response.json();
        return JSON.stringify(data);
    } catch (e) {
        console.log(e);
    }
}

export default getWeather;