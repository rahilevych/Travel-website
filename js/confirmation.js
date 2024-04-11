document.addEventListener('DOMContentLoaded', function () {
  // Получаем данные из URL
  const urlParams = new URLSearchParams(window.location.search);
  const userData = Object.fromEntries(urlParams.entries());
  dispData(userData);
});

function dispData(userData) {
  const userInfoDiv = document.querySelector('.confirmation__info');

  // Отображаем данные в div с классом "confirmation__info"
  userInfoDiv.innerHTML = `
      <p>Name:${userData.name}</p>
      <p>Surname:${userData.surname}</p>
      <p>Date:${userData.date}</p>
      <p>Email:${userData.email}</p>
      <p>Country:${userData.country}</p>
      <p>City:${userData.city}</p>
      <p>Travel preferences:${userData.preferences}</p>
      <p>You speaks:${userData.languages}</p>
      <p>You prefer countries:${userData.countries}</p>
    `;
  console.log(userData);
}
