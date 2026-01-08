import React from 'react'
import '../components/Weather.css'
import search_icon from '../assets/search.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'

// Presenter Component - Only handles UI rendering
const Weather = ({ inputRef, weatherData, onSearch }) => {
  return (
    <div className='weather'>
        <div className="search-bar">
            <input ref={inputRef} type="text" placeholder='Search' className='bar'/>
            <img src={search_icon} alt="" onClick={onSearch} />
        </div>
        {weatherData ? (
            <>
                <img src={weatherData.icon} alt="" className='weather-icon'/>
                <p className='temperature'>{weatherData.temperature}°c</p>
                <p className='location'>{weatherData.location}</p>
                <div className="weather-data">
                    <div className="col">
                        <img src={humidity_icon} alt="" />
                        <div>
                            <p>{weatherData.humidity} %</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="col">
                        <img src={wind_icon} alt="" />
                        <div>
                            <p>{weatherData.windSpeed} km/h</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
            </>
        ) : null}
    </div>
  )
}

export default Weather