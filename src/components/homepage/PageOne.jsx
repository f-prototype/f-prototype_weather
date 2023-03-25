import { useEffect } from 'react';
import { useState } from 'react';
import { MainPage } from '../MainInfoContainer/MainInfoContainer';
import { WeatherInfo } from '../WeatherInfo/WeatherInfo';
import { FiveDays } from '../FiveDays/FiveDays';
import WeatherService from '../../API/WeatherService';
import './PageOne.css';
import '../../App.css';

function PageOne() {
  const [infoWeather, setInfoWeather] = useState(false);
  const [infoFiveDays, setInfoFiveDays] = useState(false);
  const [city, setCity] = useState('Сеул');
  const KEY = '555565287c5363209a8b8437550c5e4b';

  useEffect(() => {
    WeatherService.getWeather(city, KEY, setInfoWeather, setInfoFiveDays);
  }, [city]);
  return (
    <>
      <div
        className="page-one"
        style={
          infoWeather
            ? {
                backgroundImage: `url(${require(`../../img/weather-back/${infoWeather.weather[0].icon}.jpg`)})`,
              }
            : {}
        }
      >
        {infoWeather && (
          <>
            <MainPage infoWeather={infoWeather} />
            <WeatherInfo infoWeather={infoWeather} setCity={setCity} />
          </>
        )}
      </div>
      <FiveDays obj={infoFiveDays} />
    </>
  );
}
export default PageOne;
