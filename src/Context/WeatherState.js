import React, { useState } from 'react'
import WeatherContext from './WeatherContext'

const WeatherState = (props) => {

    const [temperature, setTemperature] = useState([]);
    const [details, setDetails] = useState({});
    const [description, setDescription] = useState("Weather Outside")
    const [forecast, setForecast] = useState({});
    const [icon, setIcon] = useState("")


    const getWeather = async (url) => {

        const response = await fetch(url,{
            method:"GET"
        })
        const data = await response.json();

        setTemperature(data.main.temp);
        setDescription(data.weather[0].description);
        setIcon(data.weather[0].icon);
        setDetails(data);
    }

    const getWeatherForecast = async (url) => {

        const response = await fetch(url,{
            method:"GET"
        })
        const data = await response.json();
        setForecast(data);
    }

    return (
        <WeatherContext.Provider value={{icon, forecast, description, details, temperature, getWeather,getWeatherForecast }}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherState