import { useRef, useState } from "react"
import axios from "axios"
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/weatherCard"
import video from "./video1.mp4"

const App = () => {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(" ");
  const searchInputREf = useRef(null)

  const API_KEY = "9a65eaa7c73b008ba257c6df6659e559"
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(' ');
    try{
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response.data);
      setWeather(response.data);
      
    }
    catch(error){
      if(error.response && error.response.status === 404){
        setError("City not found. Please try again.");
      }else{
        setError("An error occurred. Please try again I am still working on it so could you pelase enter the city name manually.");
      }
      setWeather(null);
    } finally{
        setLoading(false);
      }
    
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 relative overflow-hidden">
      <video  
      autoPlay 
      loop 
      muted 
      className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={video} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-1"></div>
      <div className="bg-black/20 text-white rounded-md shadow-1g p-8 max-w-md w-full z-10 ">
      <h1 className="text-3x1 font-bold text-center mb-6">Weather App</h1>
      <SearchBar fetchWeather = {fetchWeather} searchInputREf={searchInputREf}/>
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {weather && <WeatherCard weather={weather} />}

      </div>
    </div>
  )
}

export default App