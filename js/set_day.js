export default function setDay(date, dateNumber, setAllData, selector) {
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
