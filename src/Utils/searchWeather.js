import { ifErrInfo } from './ifErrInfo';

export async function searchWeather(lat, lon, name, setInfoWeather, KEY) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${KEY}`
    );
    let result = await response.json();
    setInfoWeather({ ...result, name: name });
  } catch (err) {
    setInfoWeather({ ...ifErrInfo.list[0], name: 'idk' });
  }
}
