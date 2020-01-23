import translateToCoordinates from '../../request_to_coordinate_translate.js';
import weatherRequest from '../../weather_request.js';
import setSearchedLocation from '../../set_searched_location.js';
import setSearchedData from '../../set_searched_data.js';
import mapRequest from '../../map_request.js';

export default class SearchBtn extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', async () => {
      const search = document.querySelector('.input').value;
      if (search) {
        const data = await translateToCoordinates(search);
        const latitude = data.results[0].geometry.lat;
        const longitude = data.results[0].geometry.lng;
        document.querySelector('ymaps').remove();
        mapRequest(latitude, longitude);
        setSearchedLocation('.heading-1', data);
        const weather = await weatherRequest(latitude, longitude);
        console.log(weather);
        setSearchedData(weather);
        document.querySelector('.temperature-btn__switch-1').classList.toggle('active');
        document.querySelector('.temperature-btn__switch-2').classList.toggle('active');
        localStorage.setItem('temperature', 'f');
      }
    });
  }
}
