import React from 'react'

const WeatherCard = ({weather}) => {
  return <div className=" border border-grey-300 rounded-lg p-6">
    <h2 className=" text-center text-2x1 font-bold mt-6">{weather.name},{weather.sys.country}</h2>
    <div className="flex items-center justify-center mt-4">
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
      alt={weather.weather[0].description} 
      className="w-25 h-25" />
    </div>
    <p className="font-extrabold text-white-800 text-lg text-center"> 
      <br />{Math.round(weather.main.temp)}°C</p>
    <p className=" text-center text-grey-400 capitalize"> 
      {weather.weather[0].description}</p>
      <div>
        <div className="grid grid-cols-2 gap-5 mt-6">
          <p className="text-white-400">Humdity: <span className="font-extrabold">{weather.main.humidity} %</span>
          </p>
          <p className="text-white-400">wind: <span className="font-extrabold">{weather.wind.speed} m/s</span>
          </p>
          <p>Pressure: <span className="font-extrabold">{weather.main.pressure} hPa </span>
          </p>
          <p>Feel's Like: <span className="font-extrabold">{Math.round(weather.main.feels_like)}°C</span>
          </p>
          <p>Max-Temp: <span className="font-extrabold">{Math.round(weather.main.temp_max)}°C</span>
          </p>
          <p>Min-Temp: <span className="font-extrabold">{Math.round(weather.main.temp_min)}°C</span>
          </p>
          <p>Sea-Level: <span className="font-extrabold">{weather.main.sea_level}</span>
          </p>
          <p>Main: <span className="font-extrabold">{weather.weather[0].main}</span>
          </p>
        </div>
      </div>

  </div>
}

export default WeatherCard