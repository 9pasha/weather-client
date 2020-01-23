import translateTemperature from '../../translate_temperature.js';

export default class FahrenheitBtn extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', () => {
      if (localStorage.getItem('temperature') === 'c') {
        this.classList.toggle('active');
        translateTemperature(['temperature-value', 'feels__value', 'itm__degrees-1', 'itm__degrees-2', 'itm__degrees-3'], false);
        document.querySelector('.temperature-btn__switch-2').classList.toggle('active');
        localStorage.setItem('temperature', 'f');
      }
    });
  }
}
