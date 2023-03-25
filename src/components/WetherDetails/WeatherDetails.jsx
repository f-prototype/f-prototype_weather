import './WeatherDetails.css';
import { DetailsInner } from '../DetailsInner/DetailsInner';
export const WeatherDetails = ({ infoWeather }) => {
  return (
    <div className="details">
      <p className="h">Weather Details</p>
      <DetailsInner name="Clouds" info={infoWeather.clouds.all + '%'} />
      <DetailsInner
        name="Description"
        info={infoWeather.weather[0].description}
      />
      <DetailsInner name="Temp Max" info={`${infoWeather.main.temp_max}°`} />
      <DetailsInner name="Temp Min" info={`${infoWeather.main.temp_min}°`} />
      <DetailsInner
        name="Temp Feel Like"
        info={`${infoWeather.main.feels_like}°`}
      />
      <DetailsInner name="Humidity" info={`${infoWeather.main.humidity}%`} />
      <DetailsInner name="Pressure" info={`${infoWeather.main.pressure}`} />
      <DetailsInner name="Wind gust" info={`${infoWeather.wind.gust}`} />
      <DetailsInner name="Wind Speed" info={`${infoWeather.wind.speed}`} />
    </div>
  );
};
