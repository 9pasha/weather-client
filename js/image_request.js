export default async function imageRequest(weather) {
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
