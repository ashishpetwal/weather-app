import React from 'react'

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

const TodayForecast = (props) => {

    const { date, icon, temp } = props;
    let dateObj = new Date(date * 1000);

    let hours = dateObj.getHours().toString();
    let minutes = dateObj.getMinutes().toString();


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
            <div className='flex flex-col items-center gap-y-2'>
                <p className='text-[#cbd5e1] text-[.6rem] sm:text-[1rem] font-bold sm:font-medium'>{`${hours > 12 ? hours % 12 : hours}:${minutes} ${hours >= 12 ? "PM" : "AM"}`}</p>
                {/* <i className={`fas fa-${icons} text-[3rem] text-white`}></i>
                 */}

                <img className = "h-[2rem] sm:h-[3rem]" src={main[icon.toString()]} alt=""/>

                <h4 className='text-[1rem] sm:text-[1.5rem] text-[#cbd5e1]'>{Math.round(temp)}&deg;C</h4>
            </div>
        </>
    )
}

export default TodayForecast