import '../styles/submit.css';
export default Submit;

async function GetWeather({location, setWeather}) {
    try {
        const response = await fetch('http://127.0.0.1:3000/' + location, {
        });
        const data = await response.json();
        setWeather(JSON.stringify(data));
    } catch (err) {
        console.log(err);
    }
}

function Submit ({location, setWeather}) {
    return (
        <button onClick={() => GetWeather({location, setWeather})}>Submit</button>
    )
}