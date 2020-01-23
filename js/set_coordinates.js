export default function setCoordinate(data, selectorLatitude, selectorLongitude) {
  const prop = data;
  const latitude = prop.latitude.toFixed(2);
  const longitude = prop.longitude.toFixed(2);
  document.querySelector(`.${selectorLatitude}`).innerHTML = latitude;
  document.querySelector(`.${selectorLongitude}`).innerHTML = longitude;
}
