import React from 'react';

export const ImgWeather = ({ infoWeather }) => {
  return (
    <div className="img_weather">
      <div className="img-container">
        <img
          src={require(`../../img/weather/${infoWeather.weather[0].icon}.svg`)}
          alt="weather"
          className="img"
        />
      </div>
      <div className="weather-container">
        <p className="weather">{infoWeather.weather[0].main}</p>
      </div>
    </div>
  );
};
