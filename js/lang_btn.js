export default class LanguageBtn extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', () => {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
      <div>Имя:
        <slot name="username"></slot>
      </div>
      <div>Дата рождения:
        <slot name="birthday"></slot>
      </div>
      <fieldset>
        <legend>Другая информация</legend>
        <slot></slot>
      </fieldset>
      `;
    });
  }
}
