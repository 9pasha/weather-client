export default function setSearchedLocation(selector, data) {
  const location = data.results[0].formatted;
  document.querySelector(`${selector}`).innerHTML = location;
}
