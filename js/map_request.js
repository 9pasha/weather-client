export default function mapRequest(latitude, longitude) {
  ymaps.ready(init);
  function init() {
    const myMap = new ymaps.Map('map', {
      center: [latitude, longitude],
      zoom: 11,
    });
  }
}
