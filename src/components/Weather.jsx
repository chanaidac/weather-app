import { useState } from "react";
import axios from "axios"

const Weather = () => {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState('');
    const [temprature, setTemprature] = useState('');
    const [description, setDescription] = useState('');

    const handleCity = (event) => {
        setCity(event.target.value)
    }

    const getCityDetails = () => {

        const weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec1990e12cd5b9b23eb6d3c2053af80b`)
        weatherdata.then((success) => {
            setWeather(success.data.weather[0].main)
            setTemprature(success.data.main.temp)
            setDescription(success.data.weather[0].description)
        }).catch(() => {
            console.log("error")
        })
    }

    return (
        <div className="bg-black p-12">
            <div className="bg-green-400 rounded-md p-10 flex flex-col gap-3">
                <h1 className="text-black font-bold">Weather Report</h1>
                <p>I can give you a weather report about your city!</p>
                <input onChange={handleCity} value={city} type="text" name="" id="" className="rounded border border-solid border-black p-2 outline-0" />
                <input type="button" onClick={getCityDetails} value="Get Report" className="bg-black rounded text-white p-2" />
                <p><strong>Weather:</strong>{weather}</p>
                <p><strong>Temperature:</strong>{temprature}</p>
                <p><strong>Description:</strong>{description}</p>
            </div>
        </div>
    )
}
export default Weather;