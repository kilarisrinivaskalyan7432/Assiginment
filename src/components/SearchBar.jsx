import { useState } from 'react'
import API_URL from '../App'
import API_KEY from '../App'

const SearchBar = ({fetchWeather, searchInputRef}) => {
  const [city, setCity] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if(city.trim()){
      fetchWeather(city);
      setCity('');
    }
  }
  const handleLocationSearch = () =>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
        fetchWeather(API_URL);
        console.log(position);
      },
      ()=>{
        alert("Could not get your location");
      }
    );
  };
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input type='text' placeholder='Enter a city name' ref={searchInputRef} value={city} onChange={(e)=>
        setCity(e.target.value)
      } className=" flex-1 p-2 border border-grey-300 
      rounded-l-lg  outline-none border-r-0 "/>
      <button type='submit' className="bg-blue-500 border 
      cursor-pointer p-2 hover:bg-blue-600 
      border-l-0 rounded-r-lg">
        Search
      </button>
      <button className="cursor-pointer rounded-l-lg p-2 white-500 
      hover:white-650
      flex items-center justify-center" onClick={handleLocationSearch}>
      
      <span className="material-symbols-outlined">
        my_location
      </span>
      </button>
    </form>
  )
}


export default SearchBar