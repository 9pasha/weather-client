import translatePage from './translate_page.js';

export default function setLanguage() {
  const langBlock = document.querySelector('.language-block');
  langBlock.addEventListener('click', (el) => {
    const language = el.target.innerHTML;
    localStorage.setItem('language', language.toLowerCase());
    translatePage(language.toLowerCase());

  });
}
