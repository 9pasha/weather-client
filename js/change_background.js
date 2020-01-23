export default function changeBackground(selector, src) {
  const element = document.querySelector(`${selector}`);
  const background = new Image();
  background.src = src;
  background.crossOrigin = 'Anonymous';
  background.addEventListener('load', () => {
    element.style.backgroundImage = `url(${background.src})`;
  });
}
