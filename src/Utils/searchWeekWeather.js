import { ifErrInfo } from './ifErrInfo';

export function searchWeekWeather(lat, lon, KEY, setInfoFiveDays) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${KEY}`
  )
    .then((response) => response.json())
    .then((result) => {
      setInfoFiveDays(result);
    })
    .catch((err) => {
      setInfoFiveDays(ifErrInfo);
    });
}
