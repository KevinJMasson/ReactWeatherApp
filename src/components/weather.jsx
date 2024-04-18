export default Weather;

function Weather({weather}) {
    if (weather != '') {
        var weatherData = JSON.parse(weather);
        return (
            <div>
                <img src={weatherData.current.condition.icon}/>
                <p>{weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</p>
                <p>{weatherData.current.temp_c} Degrees</p>
            </div>
        )
    }
}