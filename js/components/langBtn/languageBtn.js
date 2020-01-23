import languageBlock from '../languageBlock/languageBlock.js';
import setLanguage from '../languageBlock/set_lang.js';

export default class LanguageBtn extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', () => {
      const languageBlockComponent = languageBlock();
      document.querySelector('.wrapper').innerHTML = languageBlockComponent;
      setLanguage();
    });
  }
}
