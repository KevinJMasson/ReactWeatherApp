import { useState } from 'react'
import './styles/app.css'
import Input from './components/input.jsx'
import Submit from './components/submit.jsx'
import Weather from './components/weather.jsx'

function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');

  return (
    <div id ="app">
    <div id="dataInput">
    <Input location={location} setLocation={setLocation}/>
    <Submit location={location} setWeather={setWeather}/>
    </div>
    <Weather weather={weather}/>
    </div>
  )
}

export default App
