import fullCountryName from './full_country_name_request.js';

export default async function setLocationName(selector) {
  const { city } = JSON.parse(localStorage.getItem('location'));
  const shortCountryName = JSON.parse(localStorage.getItem('location')).country;
  const country = await fullCountryName(shortCountryName);
  document.querySelector(`${selector}`).innerHTML = `${city}, ${country[shortCountryName]}`;
}
