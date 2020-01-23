import setCoordinate from './set_coordinates.js';
import setDay from './set_day.js';
import setImages from './set_weather_icon.js';

export default async function weatherRequest(posX, posY) {
  try {
    const PROXY = 'https://cors-anywhere.herokuapp.com/';
    const KEY = '071a9e154df1bacccc99c71ed7603971';
    const LANG = 'en';
    const URL = `${PROXY}https://api.darksky.net/forecast/${KEY}/${posX},${posY}?lang=${LANG}`;
    const request = await fetch(URL);
    const data = await request.json();
    setDay(data, 0, true);
    setDay(data, 1, false, 'itm-1 .day');
    setDay(data, 2, false, 'itm-2 .day');
    setDay(data, 3, false, 'itm-3 .day');
    setCoordinate(data, 'latitude__value', 'longitude__value');
    setImages('.images', data, '../assets/images/states/');
    return data;
  } catch (error) {
    console.log(error);
  }
}
