export default function setImages(selector, data, iconsSrc) {
  const elements = document.querySelectorAll(`${selector}`);
  const dataArray = data.daily.data;
  const iconNames = [];
  dataArray.forEach((el, id) => {
    if (id > 3) {
      return;
    }
    iconNames.push(el.icon);
  });
  elements.forEach((element, id) => {
    let name = iconNames[id];
    const currentElement = element;
    if (name !== 'fog' && name !== 'rain' && name !== 'clear' && name !== 'cloudy') {
      name = 'clear';
    }
    currentElement.src = `${iconsSrc}${name}.png`;
  });
}
