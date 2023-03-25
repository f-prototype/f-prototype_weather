export const Deg = ({ infoWeather }) => {
  return (
    <div className="deg-container">
      <p className="deg">{Math.round(infoWeather.main.temp)}&#176;</p>
    </div>
  );
};
