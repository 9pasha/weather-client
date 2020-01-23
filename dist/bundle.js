/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/init.js */ "./js/init.js");


document.addEventListener('load', Object(_js_init_js__WEBPACK_IMPORTED_MODULE_0__["default"])());


/***/ }),

/***/ "./js/change_background.js":
/*!*********************************!*\
  !*** ./js/change_background.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return changeBackground; });
function changeBackground(selector, src) {
  const element = document.querySelector(`${selector}`);
  const background = new Image();
  background.src = src;
  background.crossOrigin = 'Anonymous';
  background.addEventListener('load', () => {
    element.style.backgroundImage = `url(${background.src})`;
  });
}


/***/ }),

/***/ "./js/components/celsiumBtn/celsium_btn.js":
/*!*************************************************!*\
  !*** ./js/components/celsiumBtn/celsium_btn.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CelsiusBtn; });
/* harmony import */ var _translate_temperature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../translate_temperature.js */ "./js/translate_temperature.js");


class CelsiusBtn extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', () => {
      if (localStorage.getItem('temperature') === 'f') {
        this.classList.toggle('active');
        Object(_translate_temperature_js__WEBPACK_IMPORTED_MODULE_0__["default"])(['temperature-value', 'feels__value', 'itm__degrees-1', 'itm__degrees-2', 'itm__degrees-3'], true);
        document.querySelector('.temperature-btn__switch-1').classList.toggle('active');
        localStorage.setItem('temperature', 'c');
      }
    });
  }
}


/***/ }),

/***/ "./js/components/fahrenheitBtn/fahrenheit_btn.js":
/*!*******************************************************!*\
  !*** ./js/components/fahrenheitBtn/fahrenheit_btn.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FahrenheitBtn; });
/* harmony import */ var _translate_temperature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../translate_temperature.js */ "./js/translate_temperature.js");


class FahrenheitBtn extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', () => {
      if (localStorage.getItem('temperature') === 'c') {
        this.classList.toggle('active');
        Object(_translate_temperature_js__WEBPACK_IMPORTED_MODULE_0__["default"])(['temperature-value', 'feels__value', 'itm__degrees-1', 'itm__degrees-2', 'itm__degrees-3'], false);
        document.querySelector('.temperature-btn__switch-2').classList.toggle('active');
        localStorage.setItem('temperature', 'f');
      }
    });
  }
}


/***/ }),

/***/ "./js/components/langBtn/languageBtn.js":
/*!**********************************************!*\
  !*** ./js/components/langBtn/languageBtn.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LanguageBtn; });
/* harmony import */ var _languageBlock_languageBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../languageBlock/languageBlock.js */ "./js/components/languageBlock/languageBlock.js");
/* harmony import */ var _languageBlock_set_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../languageBlock/set_lang.js */ "./js/components/languageBlock/set_lang.js");



class LanguageBtn extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', () => {
      const languageBlockComponent = Object(_languageBlock_languageBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
      document.querySelector('.wrapper').innerHTML = languageBlockComponent;
      Object(_languageBlock_set_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });
  }
}


/***/ }),

/***/ "./js/components/languageBlock/languageBlock.js":
/*!******************************************************!*\
  !*** ./js/components/languageBlock/languageBlock.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return languageBlock; });
function languageBlock() {
  return `
    <div class="language-block">
      <div class="lang-item lang-item-1">RU</div>
      <div class="lang-item lang-item-2">BE</div>
      <div class="lang-item lang-item-3">EN</div>
    </div>`;
}


/***/ }),

/***/ "./js/components/languageBlock/set_lang.js":
/*!*************************************************!*\
  !*** ./js/components/languageBlock/set_lang.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setLanguage; });
/* harmony import */ var _translate_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate_page.js */ "./js/components/languageBlock/translate_page.js");


function setLanguage() {
  const langBlock = document.querySelector('.language-block');
  langBlock.addEventListener('click', (el) => {
    const language = el.target.innerHTML;
    localStorage.setItem('language', language.toLowerCase());
    Object(_translate_page_js__WEBPACK_IMPORTED_MODULE_0__["default"])(language.toLowerCase());

  });
}


/***/ }),

/***/ "./js/components/languageBlock/translate_page.js":
/*!*******************************************************!*\
  !*** ./js/components/languageBlock/translate_page.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return translatePage; });
/* harmony import */ var _translate_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate_request.js */ "./js/components/languageBlock/translate_request.js");


function translatePage(lang) {
  const heading1 = document.querySelector('.heading-1').innerHTML;
  Object(_translate_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(heading1, lang, 'heading-1');
  const type = document.querySelector('.type').innerHTML;
  Object(_translate_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(type, lang, 'type');
  const feels = document.querySelector('.feels__txt').innerHTML;
  Object(_translate_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(feels, lang, 'feels__txt');
  const wind = document.querySelector('.wind__txt').innerHTML;
  Object(_translate_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(wind, lang, 'wind__txt');
  const humidity = document.querySelector('.humidity__txt').innerHTML;
  Object(_translate_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(humidity, lang, 'humidity__txt');
  const latitude = document.querySelector('.latitude__txt').innerHTML;
  Object(_translate_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(latitude, lang, 'latitude__txt');
  const longitude = document.querySelector('.longitude__txt').innerHTML;
  Object(_translate_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(longitude, lang, 'longitude__txt');
  const searchBtn = document.querySelector('.search-btn').innerHTML;
  Object(_translate_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(searchBtn, lang, 'search-btn');
  const day1 = document.querySelector('.itm-1 .day').innerHTML;
  Object(_translate_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(day1, lang, 'itm-1 .day');
  const day2 = document.querySelector('.itm-2 .day').innerHTML;
  Object(_translate_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(day2, lang, 'itm-2 .day');
  const day3 = document.querySelector('.itm-3 .day').innerHTML;
  Object(_translate_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(day3, lang, 'itm-3 .day');
  const month = document.querySelector('.month').innerHTML;
  Object(_translate_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month, lang, 'month');
  const weekDay = document.querySelector('.week-day').innerHTML;
  Object(_translate_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(weekDay, lang, 'week-day');
}


/***/ }),

/***/ "./js/components/languageBlock/translate_request.js":
/*!**********************************************************!*\
  !*** ./js/components/languageBlock/translate_request.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return translate; });
/* harmony import */ var _set_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../set_value.js */ "./js/set_value.js");


async function translate(word, lang, selector) {
  try {
    const URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
    const KEY = 'trnsl.1.1.20191214T102214Z.62338bc77556746b.f60a8c8431720dd6a58e6fc94052362e8ed4fa03';
    const response = await fetch(`${URL}?lang=${lang}&key=${KEY}&text=${word}`);
    const data = await response.json();
    Object(_set_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(selector, data.text[0]);
  } catch (error) {
    console.log(error);
  }
}


/***/ }),

/***/ "./js/components/refreshBackgroundBtn/refresh_background_btn.js":
/*!**********************************************************************!*\
  !*** ./js/components/refreshBackgroundBtn/refresh_background_btn.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RefreshBackgroundBtn; });
/* harmony import */ var _change_background_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../change_background.js */ "./js/change_background.js");
/* harmony import */ var _image_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../image_request.js */ "./js/image_request.js");
/* harmony import */ var _weather_request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../weather_request.js */ "./js/weather_request.js");




class RefreshBackgroundBtn extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', async () => {
      const location = JSON.parse(localStorage.getItem('location')).loc.split(',');
      const latitude = location[0];
      const longitude = location[1];
      const weather = await Object(_weather_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(latitude, longitude);
      const image = await Object(_image_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(weather);
      Object(_change_background_js__WEBPACK_IMPORTED_MODULE_0__["default"])('body', image);
    });
  }
}


/***/ }),

/***/ "./js/components/searchBtn/searchBtn.js":
/*!**********************************************!*\
  !*** ./js/components/searchBtn/searchBtn.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBtn; });
/* harmony import */ var _request_to_coordinate_translate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request_to_coordinate_translate.js */ "./js/request_to_coordinate_translate.js");
/* harmony import */ var _weather_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../weather_request.js */ "./js/weather_request.js");
/* harmony import */ var _set_searched_location_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../set_searched_location.js */ "./js/set_searched_location.js");
/* harmony import */ var _set_searched_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../set_searched_data.js */ "./js/set_searched_data.js");
/* harmony import */ var _map_request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../map_request.js */ "./js/map_request.js");






class SearchBtn extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', async () => {
      const search = document.querySelector('.input').value;
      if (search) {
        const data = await Object(_request_to_coordinate_translate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(search);
        const latitude = data.results[0].geometry.lat;
        const longitude = data.results[0].geometry.lng;
        document.querySelector('ymaps').remove();
        Object(_map_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(latitude, longitude);
        Object(_set_searched_location_js__WEBPACK_IMPORTED_MODULE_2__["default"])('.heading-1', data);
        const weather = await Object(_weather_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(latitude, longitude);
        console.log(weather);
        Object(_set_searched_data_js__WEBPACK_IMPORTED_MODULE_3__["default"])(weather);
        document.querySelector('.temperature-btn__switch-1').classList.toggle('active');
        document.querySelector('.temperature-btn__switch-2').classList.toggle('active');
        localStorage.setItem('temperature', 'f');
      }
    });
  }
}


/***/ }),

/***/ "./js/current_location.js":
/*!********************************!*\
  !*** ./js/current_location.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return locationResponse; });
async function locationResponse() {
  try {
    const KEY = '416e8220da7694';
    const PROXY = 'https://cors-anywhere.herokuapp.com/';
    const URL = `${PROXY}https://ipinfo.io/?token=${KEY}`;
    const response = await fetch(URL);
    const data = await response.json();
    localStorage.setItem('location', JSON.stringify(data));
    return data;
  } catch (error) {
    console.log(error);
  }
}


/***/ }),

/***/ "./js/full_country_name_request.js":
/*!*****************************************!*\
  !*** ./js/full_country_name_request.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fullCountryName; });
async function fullCountryName(shortName) {
  try {
    const PROXY = 'https://cors-anywhere.herokuapp.com/';
    const URL = 'http://country.io/names.json';
    const request = await fetch(`${PROXY}${URL}`);
    const data = await request.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


/***/ }),

/***/ "./js/image_request.js":
/*!*****************************!*\
  !*** ./js/image_request.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return imageRequest; });
async function imageRequest(weather) {
  const STATE = weather.currently.icon;
  const month = localStorage.getItem('month');
  const KEY = 'd910262e6f9ed7ba16ee2511f23f7834147cc959cf30fc2c1027164d1f51344c';
  const URL = `https://api.unsplash.com/photos/random?query=${STATE},${month}&client_id=${KEY}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    const imageUrl = data.urls.regular;
    return imageUrl;
  } catch (error) {
    console.log(error);
  }
}


/***/ }),

/***/ "./js/init.js":
/*!********************!*\
  !*** ./js/init.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./js/render.js");
/* harmony import */ var _change_background_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change_background.js */ "./js/change_background.js");
/* harmony import */ var _image_request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image_request.js */ "./js/image_request.js");
/* harmony import */ var _set_current_weather_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set_current_weather.js */ "./js/set_current_weather.js");
/* harmony import */ var _set_full_location_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./set_full_location.js */ "./js/set_full_location.js");
/* harmony import */ var _map_request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map_request.js */ "./js/map_request.js");
/* harmony import */ var _current_location_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./current_location.js */ "./js/current_location.js");
/* harmony import */ var _weather_request_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weather_request.js */ "./js/weather_request.js");









async function init() {
  localStorage.setItem('temperature', 'f');
  localStorage.setItem('language', 'en');
  Object(_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])('body');
  const location = await Object(_current_location_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const latitude = location.loc.split(',')[0];
  const longitude = location.loc.split(',')[1];
  Object(_map_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])(latitude, longitude);
  Object(_set_full_location_js__WEBPACK_IMPORTED_MODULE_4__["default"])('.heading-1');
  const weather = await Object(_weather_request_js__WEBPACK_IMPORTED_MODULE_7__["default"])(latitude, longitude);
  Object(_set_current_weather_js__WEBPACK_IMPORTED_MODULE_3__["default"])(weather);
  const image = await Object(_image_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weather);
  Object(_change_background_js__WEBPACK_IMPORTED_MODULE_1__["default"])('body', image);
}


/***/ }),

/***/ "./js/map_request.js":
/*!***************************!*\
  !*** ./js/map_request.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapRequest; });
function mapRequest(latitude, longitude) {
  ymaps.ready(init);
  function init() {
    const myMap = new ymaps.Map('map', {
      center: [latitude, longitude],
      zoom: 11,
    });
  }
}


/***/ }),

/***/ "./js/render.js":
/*!**********************!*\
  !*** ./js/render.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var _components_refreshBackgroundBtn_refresh_background_btn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/refreshBackgroundBtn/refresh_background_btn.js */ "./js/components/refreshBackgroundBtn/refresh_background_btn.js");
/* harmony import */ var _js_components_langBtn_languageBtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/components/langBtn/languageBtn.js */ "./js/components/langBtn/languageBtn.js");
/* harmony import */ var _components_celsiumBtn_celsium_btn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/celsiumBtn/celsium_btn.js */ "./js/components/celsiumBtn/celsium_btn.js");
/* harmony import */ var _components_fahrenheitBtn_fahrenheit_btn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/fahrenheitBtn/fahrenheit_btn.js */ "./js/components/fahrenheitBtn/fahrenheit_btn.js");
/* harmony import */ var _components_searchBtn_searchBtn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/searchBtn/searchBtn.js */ "./js/components/searchBtn/searchBtn.js");






function render(nodeSelector) {
  const node = document.querySelector(`${nodeSelector}`);
  customElements.define('refresh-background-button', _components_refreshBackgroundBtn_refresh_background_btn_js__WEBPACK_IMPORTED_MODULE_0__["default"], { extends: 'button' });
  customElements.define('celsius-button', _components_celsiumBtn_celsium_btn_js__WEBPACK_IMPORTED_MODULE_2__["default"], { extends: 'button' });
  customElements.define('fahrenheit-button', _components_fahrenheitBtn_fahrenheit_btn_js__WEBPACK_IMPORTED_MODULE_3__["default"], { extends: 'button' });
  customElements.define('language-button', _js_components_langBtn_languageBtn_js__WEBPACK_IMPORTED_MODULE_1__["default"], { extends: 'button' });
  customElements.define('search-btn', _components_searchBtn_searchBtn_js__WEBPACK_IMPORTED_MODULE_4__["default"], { extends: 'button' });
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


/***/ }),

/***/ "./js/request_to_coordinate_translate.js":
/*!***********************************************!*\
  !*** ./js/request_to_coordinate_translate.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return translateToCoordinates; });
async function translateToCoordinates(placename) {
  try {
    const KEY = '3f0de760833f4f2f928d25fcf57973b0';
    const URL = `https://api.opencagedata.com/geocode/v1/json?q=${placename}&key=${KEY}&language=en`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


/***/ }),

/***/ "./js/set_coordinates.js":
/*!*******************************!*\
  !*** ./js/set_coordinates.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setCoordinate; });
function setCoordinate(data, selectorLatitude, selectorLongitude) {
  const prop = data;
  const latitude = prop.latitude.toFixed(2);
  const longitude = prop.longitude.toFixed(2);
  document.querySelector(`.${selectorLatitude}`).innerHTML = latitude;
  document.querySelector(`.${selectorLongitude}`).innerHTML = longitude;
}


/***/ }),

/***/ "./js/set_current_weather.js":
/*!***********************************!*\
  !*** ./js/set_current_weather.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setCurrentWeather; });
function setCurrentWeather(weather) {
  document.querySelector('.temperature-value').innerHTML = Math.floor((weather.daily.data[0].temperatureMax + weather.daily.data[0].temperatureMin) / 2);
  document.querySelector('.type').innerHTML = weather.currently.summary;
  document.querySelector('.wind__value').innerHTML = Math.floor(weather.currently.windSpeed);
  document.querySelector('.feels__value').innerHTML = Math.floor(weather.currently.apparentTemperature);
  document.querySelector('.humidity__value').innerHTML = Math.floor(weather.currently.humidity);
  document.querySelector('.itm__degrees-1').innerHTML = Math.floor((weather.daily.data[1].temperatureMax + weather.daily.data[1].temperatureMin) / 2);
  document.querySelector('.itm__degrees-2').innerHTML = Math.floor((weather.daily.data[2].temperatureMax + weather.daily.data[2].temperatureMin) / 2);
  document.querySelector('.itm__degrees-3').innerHTML = Math.floor((weather.daily.data[3].temperatureMax + weather.daily.data[3].temperatureMin) / 2);
}


/***/ }),

/***/ "./js/set_day.js":
/*!***********************!*\
  !*** ./js/set_day.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setDay; });
function setDay(date, dateNumber, setAllData, selector) {
  const days = {
    eng: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  };
  const months = {
    eng: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  };
  const currentDate = new Date(date.daily.data[dateNumber].time * 1000);
  const weekDay = currentDate.getDay();
  if (setAllData) {
    const monthDate = currentDate.getDate();
    const month = currentDate.getMonth();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    document.querySelector('.week-day').innerHTML = days.eng[weekDay];
    document.querySelector('.date').innerHTML = monthDate;
    document.querySelector('.month').innerHTML = months.eng[month];
    localStorage.setItem('month', month);
    document.querySelector('.time').innerHTML = ` ${hours}:${minutes}`;
  } else {
    document.querySelector(`.${selector}`).innerHTML = days.eng[weekDay];
  }
}


/***/ }),

/***/ "./js/set_full_location.js":
/*!*********************************!*\
  !*** ./js/set_full_location.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setLocationName; });
/* harmony import */ var _full_country_name_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full_country_name_request.js */ "./js/full_country_name_request.js");


async function setLocationName(selector) {
  const { city } = JSON.parse(localStorage.getItem('location'));
  const shortCountryName = JSON.parse(localStorage.getItem('location')).country;
  const country = await Object(_full_country_name_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(shortCountryName);
  document.querySelector(`${selector}`).innerHTML = `${city}, ${country[shortCountryName]}`;
}


/***/ }),

/***/ "./js/set_searched_data.js":
/*!*********************************!*\
  !*** ./js/set_searched_data.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setSearchedData; });
function setSearchedData(weather) {
  document.querySelector('.temperature-value').innerHTML = Math.floor((weather.daily.data[0].temperatureMax + weather.daily.data[0].temperatureMin) / 2);
  document.querySelector('.type').innerHTML = weather.currently.summary;
  document.querySelector('.wind__value').innerHTML = Math.floor(weather.currently.windSpeed);
  document.querySelector('.feels__value').innerHTML = Math.floor(weather.currently.apparentTemperature);
  document.querySelector('.humidity__value').innerHTML = Math.floor(weather.currently.humidity);
  document.querySelector('.itm__degrees-1').innerHTML = Math.floor((weather.daily.data[1].temperatureMax + weather.daily.data[1].temperatureMin) / 2);
  document.querySelector('.itm__degrees-2').innerHTML = Math.floor((weather.daily.data[2].temperatureMax + weather.daily.data[2].temperatureMin) / 2);
  document.querySelector('.itm__degrees-3').innerHTML = Math.floor((weather.daily.data[3].temperatureMax + weather.daily.data[3].temperatureMin) / 2);
}


/***/ }),

/***/ "./js/set_searched_location.js":
/*!*************************************!*\
  !*** ./js/set_searched_location.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setSearchedLocation; });
function setSearchedLocation(selector, data) {
  const location = data.results[0].formatted;
  document.querySelector(`${selector}`).innerHTML = location;
}


/***/ }),

/***/ "./js/set_value.js":
/*!*************************!*\
  !*** ./js/set_value.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setValue; });
function setValue(selector, value) {
  const element = document.querySelector(`.${selector}`);
  element.innerHTML = value;
}


/***/ }),

/***/ "./js/set_weather_icon.js":
/*!********************************!*\
  !*** ./js/set_weather_icon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setImages; });
function setImages(selector, data, iconsSrc) {
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


/***/ }),

/***/ "./js/translate_temperature.js":
/*!*************************************!*\
  !*** ./js/translate_temperature.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return temperatureTranslate; });
/* harmony import */ var _set_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_value.js */ "./js/set_value.js");


function temperatureTranslate(arrayOfSelectors, toCelsius) {
  const coefficient = 32;
  const coefficient2 = 0.555555556;
  arrayOfSelectors.forEach((el) => {
    const element = document.querySelector(`.${el}`);
    const value = element.innerHTML;
    if (toCelsius) {
      const translatedValue = ((value - coefficient) * coefficient2).toFixed(0);
      Object(_set_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(el, translatedValue);
    } else {
      const translatedValue = (value * (1 / coefficient2) + coefficient).toFixed(0);
      Object(_set_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(el, translatedValue);
    }
  });
}


/***/ }),

/***/ "./js/weather_request.js":
/*!*******************************!*\
  !*** ./js/weather_request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return weatherRequest; });
/* harmony import */ var _set_coordinates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_coordinates.js */ "./js/set_coordinates.js");
/* harmony import */ var _set_day_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set_day.js */ "./js/set_day.js");
/* harmony import */ var _set_weather_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set_weather_icon.js */ "./js/set_weather_icon.js");




async function weatherRequest(posX, posY) {
  try {
    const PROXY = 'https://cors-anywhere.herokuapp.com/';
    const KEY = '071a9e154df1bacccc99c71ed7603971';
    const LANG = 'en';
    const URL = `${PROXY}https://api.darksky.net/forecast/${KEY}/${posX},${posY}?lang=${LANG}`;
    const request = await fetch(URL);
    const data = await request.json();
    Object(_set_day_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data, 0, true);
    Object(_set_day_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data, 1, false, 'itm-1 .day');
    Object(_set_day_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data, 2, false, 'itm-2 .day');
    Object(_set_day_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data, 3, false, 'itm-3 .day');
    Object(_set_coordinates_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, 'latitude__value', 'longitude__value');
    Object(_set_weather_icon_js__WEBPACK_IMPORTED_MODULE_2__["default"])('.images', data, '../assets/images/states/');
    return data;
  } catch (error) {
    console.log(error);
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map