const COLORS = {
  '01d': 'rgb(76 113 148)',
  '01n': 'rgb(76 113 148)',
  '02d': '#4c4c94c7',
  '02n': '#3a3a71c7',
  '03d': '#d66c05',
  '03n': '#7a4410',
  '04d': '#63747e',
  '04n': '#364e5c',
  '09d': '#303e4e',
  '09n': '#171d24',
  '10d': '#81a09a',
  '10n': '#2a313f',
  '11d': '#7e8ebe',
  '11n': '#563379',
  '13d': '#74818e',
  '13n': '#23262f',
  '50d': '#303e4e',
  '50n': '#393b51',
};

export const Form = ({ infoWeather, setCity }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setCity(event.target[0].value);
      }}
      className="form"
    >
      <input
        name="search"
        className="input"
        placeholder="Another location"
        autoComplete="off"
      />
      <button
        type="submit"
        className="button"
        style={
          infoWeather
            ? { backgroundColor: `${COLORS[infoWeather.weather[0].icon]}` }
            : {}
        }
      >
        <img
          className="search"
          alt="search"
          src={require('../../img/search.png')}
        />
      </button>
    </form>
  );
};
