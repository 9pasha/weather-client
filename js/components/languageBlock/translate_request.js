import setValue from '../../set_value.js';

export default async function translate(word, lang, selector) {
  try {
    const URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
    const KEY = 'trnsl.1.1.20191214T102214Z.62338bc77556746b.f60a8c8431720dd6a58e6fc94052362e8ed4fa03';
    const response = await fetch(`${URL}?lang=${lang}&key=${KEY}&text=${word}`);
    const data = await response.json();
    setValue(selector, data.text[0]);
  } catch (error) {
    console.log(error);
  }
}
