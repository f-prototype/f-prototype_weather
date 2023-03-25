import { BlurContainer } from '../BlurContainer/BlurContainer';
import { DateContainer } from '../DateContainer/DateContainer';
import './Day.css';

export const Day = ({ info }) => {
  return (
    <div
      className="day"
      style={
        info
          ? {
              backgroundImage: `url(${require(`../../img/weather-back/${info.weather[0].icon}.jpg`)})`,
            }
          : {}
      }
    >
      <DateContainer info={info} />
      <BlurContainer info={info} />
    </div>
  );
};
