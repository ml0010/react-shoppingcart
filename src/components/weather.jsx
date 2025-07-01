import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ICONS from '../components/weather-icons';
import '../styles/weather.css';

export const Weather = () => {
    
    const [ weatherData, setWeatherData ] = useState(null);

    const average = [{month: 'Jan', avg: 11, sun: 5, rain: 21},
                    {month: 'Feb', avg: 12, sun: 7, rain: 11},
                    {month: 'Mar', avg: 13, sun: 7, rain: 11},
                    {month: 'Apr', avg: 15, sun: 8, rain: 5},
                    {month: 'May', avg: 19, sun: 9, rain: 4},
                    {month: 'Jun', avg: 23, sun: 11, rain: 5},
                    {month: 'Jul', avg: 27, sun: 11, rain: 1},
                    {month: 'Aug', avg: 26, sun: 11, rain: 7},
                    {month: 'Sep', avg: 23, sun: 9, rain: 36},
                    {month: 'Oct', avg: 20, sun: 7, rain: 18},
                    {month: 'Nov', avg: 15, sun: 7, rain: 12},
                    {month: 'Dec', avg: 13, sun: 5, rain: 21}];

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=palma&units=metric&appid=2f82b8cd333e994c4f294e5b5785a64b`);
                console.log(response.data);
                setWeatherData(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchWeatherData();
    }, []);


    return (
        <div className='weather'>
            <h2>WEATHER IN MALLORCA</h2>
        {weatherData? 
        <div className='todayWeather'>
            <h3>Today's Weather</h3>
            <div className='wrapper'>
                <img className='weatherIcon'src={ICONS[weatherData.weather[0].icon]} alt={weatherData.weather[0].description} />
                <div>
                    <p>{weatherData.weather[0].description}</p>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Feels Like: {weatherData.main.feels_like}°C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                </div>
            </div>
        </div>: <></>}
        <div className='averageWeather'>
            <h3>Montly Average Weather</h3>
            <div className='monthlyWeather'>
                {average.map((item, index) => 
                <div className='month' key={index}>
                    <p className='month-text'>{item.month}</p>
                    <p className='temperature'>{item.avg}°C</p>
                    <p className='rain'>Rain {item.rain}mm</p>
                </div>)}
            </div>
        </div>
        </div>
    )
}
