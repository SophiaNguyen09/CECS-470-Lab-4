/* import React, useState hook, and axios package.*/

import { Oval } from 'react-loader-spinner';
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import './App.css';

//Create function component called GetWeather
function GetWeather() {
    const [input, setInput] = useState('');
    const [weather, setWeather] = useState({
        loading: false,
        data: {},
        error: false,
    });

    const currentDateFunction = () => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        const WeekDays = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        const currentDate = new Date();
        const date = `${WeekDays[currentDate.getDay()]} ${months[currentDate.getMonth()]}`;
        return date;
    };

/* Define an async function that makes a GET request to the OpenWeatherMap API using the axios package. It takes the user-entered city and the API key from the .env file as parameters */

    const forecast = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setInput('');
            setWeather({ ...weather, loading: true });
            const url = 'https://api.openweathermap.org/data/2.5/weather';
            const api_key = '7aeae3603e130d440379d2284563349c';
            await axios
                .get(url, {
                    params: {
                        q: 'Los Angeles',
                        units: 'metric',
                        appid: api_key,
                    },
                })
                .then((res) => {
                    console.log('res', res);
                    setWeather({ data: res.data, loading: false, error: false });
                })
                .catch((error) => {
                    setWeather({ ...weather, data: {}, error: true });
                    setInput('');
                    console.log('error', error);
                });
        }
    };

_____________ (
        <div className="App">
            <h1 className="app-name">
                ________________
            </h1>
            <div className="search-bar">
                <_______________
                    type="text"
                    className="city-search"
                    placeholder="_____________"
                    name="query"
                    value={_____________}
                    onChange={(event) =>__________________________}
                    onKeyDown={_______}
                />
            </div>
            {weather.loading && (
                <>
                    <br />
                    <br />
                    <Oval type="Oval" color="black" height={100} width={100} />
                </>
            )}
            {weather.error && (
                <>
                    <br />
                    <br />
                    <span className="error-message">
                        <FontAwesomeIcon icon={faFrown} />
                        <span style={{ fontSize: '20px' }}>City not found</span>
                    </span>
                </>
            )}
            {weather && weather.___ && weather.data._____ && (
                <div>
                    <div className="city-name">
                        <h2>
                            {weather.data._______}, <span>{weather.data.sys._______}</span>
                        </h2>
                    </div>
                    <div className="date">
                        <span>{toDateFunction()}</span>
                    </div>
                    <div className="icon-temp">
                        <img
                            className=""
                            src={`https://openweathermap.org/img/wn/${weather.data._____________________}@2x.png`}
                            alt={weather.data.______________________}
                        />
                        {Math.round(weather.data._________________)}
                        <sup className="deg">°C</sup>
                    </div>
                    <div className="des-wind">
                        <p>{weather.data.________________}</p>
                        <p>Wind Speed: {weather.data._________________}m/s</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ______________________;
