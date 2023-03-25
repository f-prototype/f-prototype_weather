import './WeatherInfo.css';
import { Form } from '../Form/Form';
import { WeatherDetails } from '../WetherDetails/WeatherDetails';
export const WeatherInfo = ({ infoWeather, setCity }) => {
  return (
    <div className="weather-info-container">
      <Form infoWeather={infoWeather} setCity={setCity} />
      <WeatherDetails infoWeather={infoWeather} />
    </div>
  );
};
