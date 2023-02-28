import React, { useContext} from 'react'
import WeatherContext from '../Context/WeatherContext';

import night_clear from '../Icons/night-clear.svg';
import night_cloud from '../Icons/night-cloud.svg';
import night_rain from '../Icons/night-rain.svg';
import clear from '../Icons/clear.svg';
import heavy_rain from '../Icons/heavy-rain.svg';
import cloud_rain from '../Icons/cloud-rain.svg';
import cloudy from '../Icons/cloudy.svg';
import night from '../Icons/night.svg';
import rain from '../Icons/rain.svg';
import sunny_1 from '../Icons/sunny-1.svg';
import sunny_2 from '../Icons/sunny-2.svg';
import thunder from '../Icons/thunder.svg';
import snow from '../Icons/snow.svg';
import haze from '../Icons/haze.svg';

const CurrentTemp = (props) => {

    const context = useContext(WeatherContext);
    const { temperature, description, icon } = context;

    const main = {

        "01d": clear,
        "02d": sunny_1,
        "03d": sunny_2,
        "04d": cloudy,
        "09d": cloud_rain,
        "10d": heavy_rain,
        "11d": thunder,
        "13d": snow,
        "50d": haze,

        "01n": night_clear,
        "02n": night,
        "03n": night_cloud,
        "04n": night_cloud,
        "09n": rain,
        "10n": night_rain,
        "11n": thunder,
        "13n": snow,
        "50n": haze,
    }

    return (
        <>
            <div className="city flex justify-around items-center">
                <div className="temp">
                    <h2 className='text-white text-[2rem] sm:text-[3rem]'>{props.city.charAt(0).toUpperCase() + props.city.slice(1)}</h2>
                    <h3 className='text-white text-[3rem] sm:text-[4rem] py-4'>{Math.round(temperature)}&deg;C</h3>
                </div>
                <div>
                    {/* <i className={`fas fa-${icon} text-[lightskyblue] text-[6rem]`}></i> */}
                    <img className = "h-[6rem] sm:h-[8rem]" src={main[icon.toString()]} alt=""/>
                    <p className='text-center text-white'>{description}</p>
                </div>
            </div>
        </>
    )
}

export default CurrentTemp