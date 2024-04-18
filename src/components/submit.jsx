import {config} from '../../config.js';
export default Submit;

async function GetWeather({location, setWeather}) {
    var key = config.API_KEY;
    try {
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=' + key + location + "&aqi=no", {
            mode: 'cors'
        });
        response.json()
            .then(function(response) {
                console.log(response);
                setWeather(JSON.stringify(response));
            });
    } catch (err) {
        console.log(err);
    }
}

function Submit ({location, setWeather}) {
    return (
        <button onClick={() => GetWeather({location, setWeather})}>Submit</button>
    )
}