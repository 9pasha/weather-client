import render from './render.js';
import changeBackground from './change_background.js';
import imageRequest from './image_request.js';
import setCurrentWeather from './set_current_weather.js';
import setLocationName from './set_full_location.js';
import mapRequest from './map_request.js';
import locationResponse from './current_location.js';
import weatherRequest from './weather_request.js';

export default async function init() {
  localStorage.setItem('temperature', 'f');
  localStorage.setItem('language', 'en');
  render('body');
  const location = await locationResponse();
  const latitude = location.loc.split(',')[0];
  const longitude = location.loc.split(',')[1];
  mapRequest(latitude, longitude);
  setLocationName('.heading-1');
  const weather = await weatherRequest(latitude, longitude);
  setCurrentWeather(weather);
  const image = await imageRequest(weather);
  changeBackground('body', image);
}
