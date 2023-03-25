import './MainInfo.css';
import { LocationDate } from '../LocationDate/LocationDate';
import { Deg } from '../Deg/Deg';
import { ImgWeather } from '../ImgWeather/ImgWeather';

export const MainInfo = ({ infoWeather }) => {
  return (
    <div className="main-info">
      <Deg infoWeather={infoWeather} />
      <LocationDate infoWeather={infoWeather} />
      <ImgWeather infoWeather={infoWeather} />
    </div>
  );
};
