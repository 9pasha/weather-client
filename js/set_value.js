export default function setValue(selector, value) {
  const element = document.querySelector(`.${selector}`);
  element.innerHTML = value;
}
