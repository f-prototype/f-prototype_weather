export async function searchCoords(location, KEY) {
  try {
    let response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}
      &limit=5&appid=${KEY}`
    );
    let result = await response.json();
    let lat = result[0].lat;
    let lon = result[0].lon;
    let name = result[0].name;
    return [lat, lon, name];
  } catch {
    return [55, 55, 'moscow'];
  }
}
