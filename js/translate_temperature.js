import setValue from './set_value.js';

export default function temperatureTranslate(arrayOfSelectors, toCelsius) {
  const coefficient = 32;
  const coefficient2 = 0.555555556;
  arrayOfSelectors.forEach((el) => {
    const element = document.querySelector(`.${el}`);
    const value = element.innerHTML;
    if (toCelsius) {
      const translatedValue = ((value - coefficient) * coefficient2).toFixed(0);
      setValue(el, translatedValue);
    } else {
      const translatedValue = (value * (1 / coefficient2) + coefficient).toFixed(0);
      setValue(el, translatedValue);
    }
  });
}
