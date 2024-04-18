import { useState } from 'react'
import Input from './components/input.jsx'
import Submit from './components/submit.jsx'
import Weather from './components/weather.jsx'



function App() {
  const [location, setLocation] = useState('Toronto');
  const [weather, setWeather] = useState('');

  return (
    <>
    <Input location={location} setLocation={setLocation}/>
    <Submit location={location} setWeather={setWeather}/>
    <Weather weather={weather}/>
    </>
  )
}

export default App
