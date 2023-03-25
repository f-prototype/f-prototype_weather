import style from './DateContainer.module.css';

export const DateContainer = ({ info }) => {
  return (
    <div className={style.dateContainer}>
      <div className={style.date}>
        <h1>
          {info.dt_txt.slice(8, 10) +
            '.' +
            info.dt_txt.slice(5, 7) +
            ` ${info.dt_txt.slice(11, 16)}`}
        </h1>
      </div>
      <div className={style.weatherMainInfo}>
        <div className={style.deg}>
          <span>{Math.round(info.main.temp)}°</span>
        </div>
        <div className={style.img_weather}>
          <div className={style.img}>
            <img
              src={require(`../../img/weather/${info.weather[0].icon}.svg`)}
              alt="weather"
              className="img"
            />
          </div>
          <div className={style.weather}>{info.weather[0].main}</div>
        </div>
      </div>
    </div>
  );
};
