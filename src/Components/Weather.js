import React, { useContext, useState, useEffect} from 'react'
import WeatherContext from '../Context/WeatherContext'
import AirCondition from './AirCondition';
import CurrentTemp from './CurrentTemp';
import TodayForecast from './TodayForecast';


const Weather = (props) => {

    const [city, setCity] = useState("Delhi");

    const context = useContext(WeatherContext);
    const {forecast, details, getWeather,getWeatherForecast } = context;

    const currentTemp = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_ID}`

    const tempForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_ID}&units=metric&cnt=6`

    useEffect(() => {
        getWeather(currentTemp);
    }, [])

    useEffect(() => {
        getWeatherForecast(tempForecast);
    }, [])
    

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        getWeather(currentTemp);
        getWeatherForecast(tempForecast);
    }

    return (
        <div className='container flex items-center justify-center h-screen'>
            <div className="card bg-slate-800 w-[60rem] rounded-[1rem]">
                <div className="inputCity flex justify-center m-[1rem]">
                    <input className="outline-none bg-slate-700 text-white rounded px-4 py-2" placeholder='Enter your City' type="search" name="city" onChange={handleChange} id="city" />
                    <button type="submit" onClick={handleSubmit}><i className="fa-solid fa-search m-2 text-white"></i></button>
                </div>

                <div className="currentTemp">
                    <CurrentTemp city={city} />
                </div>

                <div className="todayForecast bg-slate-700 rounded-[1rem] py-3 mx-4">
                    <p className='text-white mx-[2rem]'>TODAY'S FORECAST</p>
                    <div className="forecast-item flex justify-around py-3">
                        {forecast.list?.map((e) => {
                            return <TodayForecast icon={e.weather[0]?.icon} temp={e.main.temp} date={e.dt} key={e.dt} />
                        })}
                    </div>
                </div>

                <div className="air-condition bg-slate-700 rounded-[1rem] py-3 m-4">
                    <p className='text-white mx-[2rem]'>AIR CONDITIONS</p>
                    <div className="air-condition-item grid grid-cols-2 gap-[1rem] sm:flex justify-between mx-[2rem] my-[1rem]">
                        <AirCondition />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Weather