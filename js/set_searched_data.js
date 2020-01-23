export default function setSearchedData(weather) {
  document.querySelector('.temperature-value').innerHTML = Math.floor((weather.daily.data[0].temperatureMax + weather.daily.data[0].temperatureMin) / 2);
  document.querySelector('.type').innerHTML = weather.currently.summary;
  document.querySelector('.wind__value').innerHTML = Math.floor(weather.currently.windSpeed);
  document.querySelector('.feels__value').innerHTML = Math.floor(weather.currently.apparentTemperature);
  document.querySelector('.humidity__value').innerHTML = Math.floor(weather.currently.humidity);
  document.querySelector('.itm__degrees-1').innerHTML = Math.floor((weather.daily.data[1].temperatureMax + weather.daily.data[1].temperatureMin) / 2);
  document.querySelector('.itm__degrees-2').innerHTML = Math.floor((weather.daily.data[2].temperatureMax + weather.daily.data[2].temperatureMin) / 2);
  document.querySelector('.itm__degrees-3').innerHTML = Math.floor((weather.daily.data[3].temperatureMax + weather.daily.data[3].temperatureMin) / 2);
}
