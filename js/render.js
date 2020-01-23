import RefreshBackgroundBtn from './components/refreshBackgroundBtn/refresh_background_btn.js';
import LanguageBtn from '../js/components/langBtn/languageBtn.js';
import CelsiusBtn from './components/celsiumBtn/celsium_btn.js';
import FahrenheitBtn from './components/fahrenheitBtn/fahrenheit_btn.js';
import SearchBtn from './components/searchBtn/searchBtn.js';

export default function render(nodeSelector) {
  const node = document.querySelector(`${nodeSelector}`);
  customElements.define('refresh-background-button', RefreshBackgroundBtn, { extends: 'button' });
  customElements.define('celsius-button', CelsiusBtn, { extends: 'button' });
  customElements.define('fahrenheit-button', FahrenheitBtn, { extends: 'button' });
  customElements.define('language-button', LanguageBtn, { extends: 'button' });
  customElements.define('search-btn', SearchBtn, { extends: 'button' });
  node.innerHTML = `<section class="main">
    <div class="user-input">
        <div class="left-buttons">
            <button is="refresh-background-button" class="change-btn left-buttons__btn">
                <img src="./assets/images/refresh.png" alt="refresh background" width="17px" height="17px">
            </button>
            <div class="wrapper">
                <button is="language-button" class="lang-btn left-buttons__btn">
                    <span class="lang-btn__text">EN</span>
                </button>
            </div>
            <div class="temperature-btn">
                <button is="fahrenheit-button" class="temperature-btn__switch-1 left-buttons__btn active">F</button>
                <button is="celsius-button" class="temperature-btn__switch-2 left-buttons__btn">C</button>
            </div>
        </div>
        <div class="right-input">
            <input class="input" type="text" placeholder="Enter your location" required>
            <button is="search-btn" class="search-btn" type="submit">search</button>
        </div>
    </div>
    <div class="content">
        <div class="left-block">
            <h1 class="heading-1">Minsk, Belarus</h1>
            <h2 class="heading-2"><span class="week-day">Mon</span> <span class="date">28</span> <span class="month">October</span><span class="time"> 22 00</span></h2>
            <div class="info">
                <div class="info__left-block">
                    <span class="temperature-value">0</span>
                </div>
                <div class="info__right-block">
                    <img class="images" src="" alt="weather">
                    <div class="weather-states">
                        <span class="type">overcast</span>
                        <span class="feels"><span class="feels__txt">feels like: </span><span class="feels__value">5</span></span>
                        <span class="wind"><span class="wind__txt">wind: </span><span class="wind__value">5</span>m/s</span>
                        <span class="humidity"><span class="humidity__txt">humidity: </span><span class="humidity__value">10</span></span>
                    </div>
                </div>
            </div>
            <div class="three-days-weather">
                <div class="itm itm-1">
                    <span class="day"></span>
                    <div class="bottom-info">
                        <span class="itm__degrees itm__degrees-1"></span>
                        <img class="images small-images" src="" alt="weather">
                    </div>
                </div>
                <div class="itm itm-2">
                    <span class="day"></span>
                    <div class="bottom-info">
                        <span class="itm__degrees itm__degrees-2"></span>
                        <img class="images small-images" src="" alt="weather">
                    </div>
                </div>
                <div class="itm itm-3">
                    <span class="day"></span>
                    <div class="bottom-info">
                        <span class="itm__degrees itm__degrees-3"></span>
                        <img class="images small-images" src="" alt="weather">
                    </div>
                </div>
            </div>
        </div>
        <div class="right-block">
            <div id="map" class="map"></div>
            <span class="location-block latitude"><span class="latitude__txt">Latitude: </span><span class="latitude__value">0</span></span>
            <span class="location-block longitude"><span class="longitude__txt">Longitude: </span><span class="longitude__value">0</span></span>
        </div>
    </div>
   </section>`;
}
