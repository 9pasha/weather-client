export default async function locationResponse() {
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
