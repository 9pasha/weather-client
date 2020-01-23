import translate from './translate_request.js';

export default function translatePage(lang) {
  const heading1 = document.querySelector('.heading-1').innerHTML;
  translate(heading1, lang, 'heading-1');
  const type = document.querySelector('.type').innerHTML;
  translate(type, lang, 'type');
  const feels = document.querySelector('.feels__txt').innerHTML;
  translate(feels, lang, 'feels__txt');
  const wind = document.querySelector('.wind__txt').innerHTML;
  translate(wind, lang, 'wind__txt');
  const humidity = document.querySelector('.humidity__txt').innerHTML;
  translate(humidity, lang, 'humidity__txt');
  const latitude = document.querySelector('.latitude__txt').innerHTML;
  translate(latitude, lang, 'latitude__txt');
  const longitude = document.querySelector('.longitude__txt').innerHTML;
  translate(longitude, lang, 'longitude__txt');
  const searchBtn = document.querySelector('.search-btn').innerHTML;
  translate(searchBtn, lang, 'search-btn');
  const day1 = document.querySelector('.itm-1 .day').innerHTML;
  translate(day1, lang, 'itm-1 .day');
  const day2 = document.querySelector('.itm-2 .day').innerHTML;
  translate(day2, lang, 'itm-2 .day');
  const day3 = document.querySelector('.itm-3 .day').innerHTML;
  translate(day3, lang, 'itm-3 .day');
  const month = document.querySelector('.month').innerHTML;
  translate(month, lang, 'month');
  const weekDay = document.querySelector('.week-day').innerHTML;
  translate(weekDay, lang, 'week-day');
}
