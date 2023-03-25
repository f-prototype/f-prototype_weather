import { useState, useEffect } from 'react';
import { getMonthName } from '../../Utils/getMonthName';
import { getWeekDay } from '../../Utils/getWeekDay';

export const LocationDate = ({ infoWeather }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    let date = new Date();
    setData({
      dayWeek: getWeekDay(date),
      day: date.getDate(),
      month: getMonthName(date),
      hours: date.getHours() > 10 ? date.getHours() : '0' + date.getHours(),
      minutes:
        date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes(),
      year: date.getFullYear().toString().slice(2),
    });
  }, []);
  return (
    <div className="location_date">
      <div className="location-container">
        <p className="location">
          {infoWeather.name.slice(0, 1).toUpperCase() +
            infoWeather.name.slice(1)}
        </p>
      </div>
      <div className="date-container">
        <p className="date">{`${data.hours}:${data.minutes} - ${data.dayWeek}, ${data.day} ${data.month} '${data.year}`}</p>
      </div>
    </div>
  );
};
