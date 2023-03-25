import style from './BlurContainer.module.css';

export const BlurContainer = ({ info }) => {
  return (
    <div className={style.blurContainer}>
      <p>Weather Details</p>
      <div className={style.blurInner}>
        <div className={style.detailsColumn}>
          <div className={style.detailsElem}>
            <div className={style.name}>Description</div>
            <div className={style.info}>{info.weather[0].description}</div>
          </div>
          <div className={style.detailsElem}>
            <div className={style.name}>Clouds</div>
            <div className={style.info}>{info.clouds.all}%</div>
          </div>
          <div className={style.detailsElem}>
            <div className={style.name}>Temp</div>
            <div className={style.info}>{info.main.temp}°</div>
          </div>
          <div className={style.detailsElem}>
            <div className={style.name}>Feels Like</div>
            <div className={style.info}>{info.main.feels_like}°</div>
          </div>
          <div className={style.detailsElem}>
            <div className={style.name}>Temp Max</div>
            <div className={style.info}>{info.main.temp_max}°</div>
          </div>
          <div className={style.detailsElem}>
            <div className={style.name}>Temp Min</div>
            <div className={style.info}>{info.main.temp_min}°</div>
          </div>
        </div>
        <div className={style.detailsColumn}>
          {' '}
          <div className={style.detailsElem}>
            <div className={style.name}>Humidity</div>
            <div className={style.info}>{info.main.humidity}</div>
          </div>
          <div className={style.detailsElem}>
            <div className={style.name}>Pressure</div>
            <div className={style.info}>{info.main.pressure}</div>
          </div>
          <div className={style.detailsElem}>
            <div className={style.name}>Visibility</div>
            <div className={style.info}>{info.visibility / 1000} km</div>
          </div>
          <div className={style.detailsElem}>
            <div className={style.name}>Wind speed</div>
            <div className={style.info}>{info.wind.speed}</div>
          </div>
          <div className={style.detailsElem}>
            <div className={style.name}>Wind gust</div>
            <div className={style.info}>{info.wind.gust}</div>
          </div>
          <div className={style.detailsElem}>
            <div className={style.name}>Precipitation</div>
            <div className={style.info}>{info.pop * 100}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
