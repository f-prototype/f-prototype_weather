import { searchCoords } from '../Utils/searchCoords';
import { searchWeather } from '../Utils/searchWeather';
import { searchWeekWeather } from '../Utils/searchWeekWeather';

export default class WeatherService {
  static async getWeather(city, KEY, setInfoWeather, setInfoFiveDays) {
    let coords = await searchCoords(city, KEY);
    let [lat, lon, name] = coords;
    searchWeather(lat, lon, name, setInfoWeather, KEY);
    searchWeekWeather(lat, lon, KEY, setInfoFiveDays);
  }
}

// async function getWeather(city, KEY) {
//     let coords = await WeatherService.getWeather(city,KEY, setInfoWeather,setInfoFiveDays);
//     searchCoords(city, KEY);
//     let [lat, lon, name] = coords;
//     searchWeather(lat, lon, name, setInfoWeather, KEY);
//     searchWeekWeather(lat, lon, KEY, setInfoFiveDays);
//   }
//   getWeather(city, KEY);
