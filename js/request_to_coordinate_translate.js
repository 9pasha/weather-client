export default async function translateToCoordinates(placename) {
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
