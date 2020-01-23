import translateToCoordinates from './request_to_coordinate_translate.js';

export default class SearchByCity extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', () => {
      const inputSelector = '.input';
      const location = document.querySelector(`${inputSelector}`).value;
      translateToCoordinates(location);
    });
  }
}
