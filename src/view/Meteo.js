import { useEffect, useState } from "react";

function Meteo() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");
  const [link, setlink] = useState("");

  const savePositionToState = (position) => {

  };
  

  const fetchWeather = async () => {

    try {
      setlink(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b310544dca3e468d1a8900a5861d1e02`
      );  

      const response = await fetch(link)
      const json = await response.json()
      setTemperature(Math.floor(json.main.temp-273.15));
      setWeather(json.weather[0].main);
      setLongitude(json.coord.lon)
      setLatitude(json.coord.lat)
      // console.log(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [latitude, longitude]);

  return (
    <>
        <input 
          value={cityName}
          type="test"
          placeholder="Titre"
          onChange={e => (setCityName(e.target.value), fetchWeather())}
          className="form-control mb-2"
        />
      <div className="meteo">
        <div className="meteo__container">
          <h1>{cityName}</h1>
          <h2>{temperature}ºC</h2>
          <h2>{weather}</h2>
          <p>{latitude}</p>
          <p>{longitude}</p>
          <p>{link}</p>
        </div>
      </div>
    </>
  );
}

export default Meteo;
