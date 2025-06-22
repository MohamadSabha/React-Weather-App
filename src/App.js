// import "./App.css";
// import "./mystyle.css";
import { useState, useEffect } from "react";
import "./newstyle.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
  integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
  crossorigin="anonymous"
/>;
function App() {

  
  const API_KEY = "YOUR_API_KEY";
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [city, setCity] = useState("krakow");
  const fetchWeatherData = async (cityName) => {
    setCity(cityName);
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`
      );
      const data = await response.json();
      setWeatherData(data);
      console.log(data);

      const foreCastresponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`
      );
      const forecastdata = await foreCastresponse.json();

      const dailyForecast = forecastdata.list.filter(
        (item, index) => index % 8 === 0
      );

      setForecast(dailyForecast);
      setError(null);
    } catch (error) {
      setError("Couldnt fetch data,please try again");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);
  function handleSearch(e) {
    e.preventDefault();
    fetchWeatherData(searchInput);
    setSearchInput("");
  }
  if (loading)
    return (
      <div className="app">
        <div className="loading-screen">
          <div className="spinner"></div>
          <p className="loading-text">Loading...</p>
        </div>
      </div>
    );

  return (
    <div className="app">
      <p align="center">
        <a href="https://github.com/MohamadSabha/React-Weather-App">
          <img
            src="https://img.shields.io/badge/GitHub-Project-blue?style=flat-square&logo=github"
            alt="GitHub repo"
          />
        </a>
      </p>
      <div className="container mt-2">
        <div className="row gx-2 gy-2 justify-content-center">
          {["krakow", "London", "New York", "Tokyo", "Sydney", "Riyadh"].map(
            (cityName) => (
              <div key={cityName} className="col-5 col-sm-4 col-md-3 col-lg-2">
                <button
                  onClick={() => fetchWeatherData(cityName)}
                  className={`btn w-100 city-btn ${
                    city === cityName ? "active" : ""
                  }`}
                >
                  {cityName}
                </button>
              </div>
            )
          )}
        </div>
      </div>
      <div className="search">
        <form onSubmit={handleSearch} className="form">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Enter city name"
            className="search-input"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>
      {error && (
        <div className="currentweather row text-center">
          <p flex-wrap justify-content-center gap-2 mb-3>
            {error}
          </p>
        </div>
      )}

      {weatherData && weatherData.main && weatherData.weather && (
        <>
          <div className="container ">
            <div className="row">
              <div className=" col-md-6  mb-4">
                <h2>{weatherData.name}</h2>
                <div className="location">
                  <p style={{ fontSize: "20px" }}>
                    {new Date(weatherData.dt * 1000).toLocaleString("en-US", {
                      dateStyle: "full",
                      timeStyle: "short",
                    })}
                  </p>
                </div>
                <img
                  className="weather-icon"
                  src={`icons/${weatherData.weather[0].icon}.png`}
                  alt="weather"
                />
                <h1>{Math.round((weatherData.main.temp - 32) * (5 / 9))}°C</h1>
                <div className="description">
                  <h1 style={{ fontSize: "75px" }}>
                    {weatherData.weather[0].main}
                  </h1>
                </div>
              </div>

              <div className="  col-md-6">
                <div className="currentweather row text-center">
                  <div className="col-4">
                    <h3>🌡</h3>
                    <p>
                      {Math.round((weatherData.main.feels_like - 32) * (5 / 9))}
                      °C
                    </p>
                    <small>Feels Like</small>
                  </div>
                  <div className="col-4">
                    <h3>🌫️</h3>
                    <p>{weatherData.main.humidity}%</p>
                    <small>Humidity</small>
                  </div>
                  <div className="col-4">
                    <h3>💨</h3>
                    <p>{weatherData.wind.speed} MPH</p>
                    <small>Wind Speed</small>
                  </div>
                </div>
                <div className=" currentweather row text-center">
                  {forecast.length > 0 && (
                    <>
                      {/* <h2 className="forecast-header">5-Day Forecast</h2> */}
                      {forecast.map((day, index) => (
                        <div key={index} className=" col-2 forecast-day">
                          <p>
                            {new Date(day.dt * 1000).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "short",
                              }
                            )}
                          </p>
                          <img
                            style={{ width: "50%" }}
                            src={`icons/${day.weather[0].icon}.png`}
                            // src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                            alt={day.weather[0].description}
                          />
                          <p>{Math.round((day.main.temp - 32) * (5 / 9))}°C</p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
