import translateTemperature from '../../translate_temperature.js';

export default class CelsiusBtn extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', () => {
      if (localStorage.getItem('temperature') === 'f') {
        this.classList.toggle('active');
        translateTemperature(['temperature-value', 'feels__value', 'itm__degrees-1', 'itm__degrees-2', 'itm__degrees-3'], true);
        document.querySelector('.temperature-btn__switch-1').classList.toggle('active');
        localStorage.setItem('temperature', 'c');
      }
    });
  }
}
