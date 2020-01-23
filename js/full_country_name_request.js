export default async function fullCountryName(shortName) {
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
