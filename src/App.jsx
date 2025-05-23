// import React from "react";

// function getWeatherIcon(wmoCode) {
//   const icons = new Map([
//     [[0], "☀️"],
//     [[1], "🌤"],
//     [[2], "⛅️"],
//     [[3], "☁️"],
//     [[45, 48], "🌫"],
//     [[51, 56, 61, 66, 80], "🌦"],
//     [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
//     [[71, 73, 75, 77, 85, 86], "🌨"],
//     [[95], "🌩"],
//     [[96, 99], "⛈"],
//   ]);
//   const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
//   if (!arr) return "NOT FOUND";
//   return icons.get(arr);
// }

// function convertToFlag(countryCode) {
//   const codePoints = countryCode
//     .toUpperCase()
//     .split("")
//     .map((char) => 127397 + char.charCodeAt());
//   return String.fromCodePoint(...codePoints);
// }

// function formatDay(dateStr) {
//   return new Intl.DateTimeFormat("en", {
//     weekday: "short",
//   }).format(new Date(dateStr));
// }

// class App extends React.Component {
//   state = {
//     location: "",
//     isLoading: false,
//     displayLoaction: "",
//     weather: {},
//   };


//   // async fetchWeather() {
//   fetchWeather = async () => {
//     if (this.state.location.length < 2) return this.setState({weather: {} });

//     try {
//       this.setState({ isLoading: true });

//       // 1) Getting location (geocoding)
//       const geoRes = await fetch(
//         `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
//       );
//       const geoData = await geoRes.json();
//       console.log(geoData);

//       if (!geoData.results) throw new Error("Location not found");

//       const { latitude, longitude, timezone, name, country_code } =
//         geoData.results.at(0);
//       this.setState({
//         displayLoaction: `${name} ${convertToFlag(country_code)}`,
//       });

//       // 2) Getting actual weather
//       const weatherRes = await fetch(
//         `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
//       );
//       const weatherData = await weatherRes.json();
//       this.setState({ weather: weatherData.daily });
//     } catch (err) {
//       console.error(err);
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   setLocation = (e) => {
//     this.setState({ location: e.target.value });
//   };

//   // useEffect []
//   componentDidMount() {
//     // this.fetchWeather();

//     this.setState({location: localStorage.getItem ("location") || ""})
//   }

// // useEffect [location]
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.location !== prevState.location) { this.fetchWeather();

//       localStorage.setItem("location", this.state.location);
//     }
//   }

//   render() {
//     return (
//       <div className="app">
//         <h1>Weather Pulse</h1>
//         <input location={this.state.location} onChange={this.setLocation} placeholder="search from location" />

//         {this.state.isLoading && <p classname="loader">Loading...</p>}

//         {this.state.weather.weathercode && (
//           <Weather
//             weather={this.state.weather}
//             location={this.state.displayLoaction}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export default App;

// class Input extends React.Component {
//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           placeholder=""
//           value={this.props.location}
//           onChange={this.props.onChangeLocation}
//         />
//       </div>
//     );
//   }
// }

// class Weather extends React.Component {

// componentWillUnmountponentDidMount() {
//   console.log("Weather will Mount");
// }

// // useEffect [weather]
// componentDidUpdate(prevProps, prevState) {
//   console.log("Weather Updated");
// }

// // useEffect [] or com
//   render() {
//     const {
//       temperature_2m_max: max,
//       temperature_2m_min: min,
//       time: dates,
//       weathercode: codes,
//     } = this.props.weather;

//     return (
//       <div>
//         <h2>Weather {this.props.location}</h2>
//         <ul className="weather">
//           {dates.map((date, i) => (
//             <Day
//               date={date}
//               max={max.at(i)}
//               min={min.at(i)}
//               code={codes.at(i)}
//               key={dates}
//               isToday={i === 0}
//             />
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// class Day extends React.Component {
//   render() {
//     const { date, max, min, code, isToday } = this.props;

//     return (
//       <li className="day">
//         <span>{getWeatherIcon(code)}</span>
//         <p>{isToday ? "Today" : formatDay(date)}</p>
//         <p>
//           {Math.floor(min)}&deg; &mdash; {Math.ceil(max)}&deg;
//         </p>
//       </li>
//     );
//   }
// }



// function based component
"use client"

import { useState, useEffect } from "react"
import "./index.css"

// Enhanced weather icons with more visual appeal
function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ])
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode))
  if (!arr) return "NOT FOUND"
  return icons.get(arr)
}

// Get weather description based on code
function getWeatherDescription(wmoCode) {
  const descriptions = new Map([
    [[0], "Clear sky"],
    [[1], "Mainly clear"],
    [[2], "Partly cloudy"],
    [[3], "Overcast"],
    [[45, 48], "Foggy"],
    [[51, 56, 61, 66, 80], "Light rain"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "Heavy rain"],
    [[71, 73, 75, 77, 85, 86], "Snow"],
    [[95], "Thunderstorm"],
    [[96, 99], "Thunderstorm with hail"],
  ])
  const arr = [...descriptions.keys()].find((key) => key.includes(wmoCode))
  if (!arr) return "Unknown"
  return descriptions.get(arr)
}

// Get weather class based on code
function getWeatherClass(wmoCode) {
  if (wmoCode === 0) return "clear-sky"
  if ([1, 2].includes(wmoCode)) return "partly-cloudy"
  if (wmoCode === 3) return "overcast"
  if ([45, 48].includes(wmoCode)) return "foggy"
  if ([51, 56, 61, 66, 80].includes(wmoCode)) return "light-rain"
  if ([53, 55, 63, 65, 57, 67, 81, 82].includes(wmoCode)) return "heavy-rain"
  if ([71, 73, 75, 77, 85, 86].includes(wmoCode)) return "snow"
  if (wmoCode === 95) return "thunderstorm"
  if ([96, 99].includes(wmoCode)) return "thunderstorm-hail"
  return "default-weather"
}

// Fixed flag conversion function to ensure proper display
function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}

// Get the correct day name for a given date
function getDayName(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "long",
  }).format(new Date(dateStr))
}

// Dark Mode Toggle Component
function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle" aria-label="Toggle dark mode">
      <div className="toggle-icon-container">
        {/* Sun Icon */}
        <svg className={`toggle-icon sun ${isDarkMode ? "hidden" : ""}`} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
        {/* Moon Icon */}
        <svg className={`toggle-icon moon ${isDarkMode ? "" : "hidden"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
    </button>
  )
}

function App() {
  const [location, setLocation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [displayLocation, setDisplayLocation] = useState("")
  const [weather, setWeather] = useState({})
  const [error, setError] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode")
    if (savedDarkMode !== null) {
      setIsDarkMode(JSON.parse(savedDarkMode))
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDarkMode(prefersDark)
    }
  }, [])

  // Update document class and save preference when dark mode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode")
    } else {
      document.documentElement.classList.remove("dark-mode")
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode))
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const fetchWeather = async () => {
    if (location.length < 2) {
      setWeather({})
      return
    }

    try {
      setIsLoading(true)
      setError("")

      // 1) Getting location (geocoding)
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`)
      const geoData = await geoRes.json()

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("Location not found. Please try another location.")
      }

      const { latitude, longitude, timezone, name, country_code } = geoData.results.at(0)

      // Create the flag emoji and wrap it in a span with the emoji-flag class
      const flagEmoji = convertToFlag(country_code)
      setDisplayLocation(
        <span>
          {name} <span className="emoji-flag">{flagEmoji}</span>
        </span>,
      )

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max`,
      )
      const weatherData = await weatherRes.json()
      setWeather(weatherData.daily)
    } catch (err) {
      console.error(err)
      setError(err.message)
      setWeather({})
    } finally {
      setIsLoading(false)
    }
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }

  // Equivalent to componentDidMount
  useEffect(() => {
    setLocation(localStorage.getItem("location") || "")
  }, [])

  // Equivalent to componentDidUpdate for location changes
  useEffect(() => {
    if (location) {
      fetchWeather()
      localStorage.setItem("location", location)
    }
  }, [location])

  return (
    <div className="container">
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="app">
        <h1>Weather Pulse</h1>

        <div className="search-container">
          <input
            value={location}
            onChange={handleLocationChange}
            placeholder="Search for a location..."
            className="search-input"
          />
        </div>

        {isLoading && <p className="loader">Loading...</p>}

        {error && <div className="error-message">{error}</div>}

        {weather.weathercode && <Weather weather={weather} location={displayLocation} isDarkMode={isDarkMode} />}
      </div>
    </div>
  )
}

function Weather({ weather, location, isDarkMode }) {
  // Equivalent to componentDidMount
  useEffect(() => {
    console.log("Weather component mounted")
  }, [])

  // Equivalent to componentDidUpdate for weather changes
  useEffect(() => {
    console.log("Weather Updated")
  }, [weather])

  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: dates,
    weathercode: codes,
    precipitation_sum: precipitation = [],
    windspeed_10m_max: windspeed = [],
  } = weather

  // Get today's date to compare with API dates
  const today = new Date()
  today.setHours(0, 0, 0, 0) // Reset time part for comparison

  return (
    <div className="weather-container">
      <h2>Weather {location}</h2>

      <div className="weather">
        {dates.map((date, i) => {
          // Parse the API date
          const forecastDate = new Date(date)
          forecastDate.setHours(0, 0, 0, 0) // Reset time part for comparison

          // Check if this date is today
          const isToday = forecastDate.getTime() === today.getTime()

          return (
            <Day
              key={date}
              date={date}
              max={max.at(i)}
              min={min.at(i)}
              code={codes.at(i)}
              isToday={isToday}
              precipitation={precipitation[i] || 0}
              windspeed={windspeed[i] || 0}
              isDarkMode={isDarkMode}
            />
          )
        })}
      </div>
    </div>
  )
}

function Day({ date, max, min, code, isToday, precipitation, windspeed, isDarkMode }) {
  const weatherClass = getWeatherClass(code)
  const weatherDesc = getWeatherDescription(code)

  // Get the day name
  const dayName = isToday ? "Today" : getDayName(date)

  return (
    <div className={`day ${isToday ? "today" : ""} ${weatherClass}`}>
      <span className="weather-icon">{getWeatherIcon(code)}</span>
      <p className="day-name">{dayName}</p>
      <p className="weather-desc">{weatherDesc}</p>
      <p className="temperature">
        <span className="temp-max">{Math.ceil(max)}°</span>
        <span className="temp-min">{Math.floor(min)}°</span>
      </p>

      {(precipitation > 0 || windspeed > 0) && (
        <div className="weather-details">
          {precipitation > 0 && (
            <div className="precipitation">
              <span className="icon">💧</span>
              <span>{precipitation} mm</span>
            </div>
          )}
          {windspeed > 0 && (
            <div className="wind">
              <span className="icon">💨</span>
              <span>{windspeed} km/h</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default App
