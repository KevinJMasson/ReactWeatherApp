import '../styles/input.css'
export default Input;



function Location({location, setLocation}) {
    return (
        <>
        <input
            type = "text"
            value = {location}
            onChange={(event) => setLocation(event.target.value)}
            />
        </>
    )
}

function Input({location, setLocation}) {
    return (
        <>
        <Location location= {location} setLocation={setLocation}/>
        </>
    )
}