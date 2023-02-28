import React, { useContext } from 'react'
import WeatherContext from '../Context/WeatherContext'

const AirCondition = () => {

    const context = useContext(WeatherContext);
    const { details } = context;

    return (
        <>
            <div className="card">
                <div className="type flex gap-x-2 items-center text-[white] text-[1.2rem]">
                    <i className="fa-solid fa-temperature-three-quarters"></i>
                    <h4>Real Feel</h4>
                </div>
                <div className="data text-white text-[1.2rem] sm:text-[2rem]">
                    <h3>{Math.round(details.main?.feels_like)}&deg;C</h3>
                </div>
            </div>

            <div className="card">
                <div className="type flex gap-x-2 items-center text-[white] text-[1.2rem]">
                    <i className="fa-solid fa-wind"></i>
                    <h4>Wind</h4>
                </div>
                <div className="data text-white text-[1.2rem] sm:text-[2rem]">
                    <h3>{details.wind?.speed} m/s</h3>
                </div>
            </div>

            <div className="card">
                <div className="type flex gap-x-2 items-center text-[white] text-[1.2rem]">
                    <i className="fa-solid fa-ruler-vertical"></i>
                    <h4>Pressure</h4>
                </div>
                <div className="data text-white text-[1.2rem] sm:text-[2rem]">
                    <h3>{details.main?.pressure} hPa</h3>
                </div>
            </div>

            <div className="card">
                <div className="type flex gap-x-2 items-center text-[white] text-[1.2rem]">
                    <i className="fa-solid fa-droplet"></i>
                    <h4>Humidity</h4>
                </div>
                <div className="data text-white text-[1.2rem] sm:text-[2rem]">
                    <h3>{details.main?.humidity}%</h3>
                </div>
            </div>

        </>
    )
}

export default AirCondition