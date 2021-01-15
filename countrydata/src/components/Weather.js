import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ ctry }) => {
  const [temp, setTemp] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [img, setImg] = useState("");

  /** lazy implemented
   *  - dont handle edge case (API Rest Country ctryName !== API WeatherStack ctryName
   *  - careful space character in query
   *  - API free tier very very unstable 80% failed for some unknown reason*/
  useEffect(() => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${ctry.name}`;
    console.log("click here to check API failed or not", url);
    axios
      .get(url)
      .then((res) => {
        console.log("ket qua day ne", res.data);
        setTemp(res.data.current.temperature);
        setWindSpeed(res.data.current.wind_speed);
        setImg(res.data.current.weather_icons[0]);
      })
      .catch((err) => console.log("API failed ???", err.message));
  }, [ctry.name]);

  return (
    <Fragment>
      <h5>Weather in {ctry.name}</h5>
      <img src={img} alt="The weather representation go here" />
      <p>
        <b>Temp: </b>
        {temp} Celsius
      </p>
      <p>
        <b>Winds: </b>
        {windSpeed} m/s
      </p>
    </Fragment>
  );
};

export default Weather;
