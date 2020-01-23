import changeBackground from '../../change_background.js';
import imageRequest from '../../image_request.js';
import weatherRequest from '../../weather_request.js';

export default class RefreshBackgroundBtn extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', async () => {
      const location = JSON.parse(localStorage.getItem('location')).loc.split(',');
      const latitude = location[0];
      const longitude = location[1];
      const weather = await weatherRequest(latitude, longitude);
      const image = await imageRequest(weather);
      changeBackground('body', image);
    });
  }
}
