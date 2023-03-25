import './MainInfoContainer.css';
import { Logo } from '../Logo/Logo';
import { MainInfo } from '../MainInfo/MainInfo';

export const MainPage = ({ infoWeather }) => {
  return (
    <div className="main-page">
      <Logo />
      <MainInfo infoWeather={infoWeather} />
    </div>
  );
};
