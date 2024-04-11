document
  .querySelector('.registration__form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const userData = {};
    this.querySelectorAll('input,select').forEach((input) => {
      const name = input.getAttribute('name');
      const value = input.value;
      if (name && value) {
        if (input.type === 'checkbox') {
          if (!userData[name]) {
            userData[name] = [];
          }
          if (input.checked) {
            userData[name].push(value);
          }
        } else {
          userData[name] = value;
        }
      }
    });
    /*const name = document.getElementsByName('name')[0].value;
    regData.append('name', name);

    const surname = document.getElementsByName('surname')[0].value;
    regData.append('surname', surname);

    const date = document.getElementsByName('date')[0].value;
    regData.append('date', date);
    const email = document.getElementsByName('email')[0].value;
    regData.append('email', email);
    const phone = document.getElementsByName('phone')[0].value;
    regData.append('phone', phone);
    const country = document.getElementsByName('country')[0].value;
    regData.append('country', country);
    const city = document.getElementsByName('city')[0].value;
    regData.append('city', city);
    const password = document.getElementsByName('password')[0].value;
    regData.append('password', password);
    const confirmation = document.getElementsByName('confirmation')[0].value;
    regData.append('confirmation', confirmation);
    const preferences = document.getElementsByName('preferences')[0].value;
    regData.append('preferences', preferences);
    const countries = [];
    let checkedCountries = document.getElementsByName('countries');
    for (let i = 0; i < checkedCountries.length; i++) {
      if (checkedCountries[i].checked) {
        countries.push(checkedCountries[i].value);
      }
    }
    regData.append('countries', countries.join(', '));

    const languages = [];
    let checkedLanguages = document.getElementsByName('languages');
    for (let i = 0; i < checkedLanguages.length; i++) {
      if (checkedLanguages[i].checked) {
        languages.push(checkedLanguages[i].value);
      }
    }
    regData.append('languages', languages.join(', '));*/

    // Создаем строку запроса для передачи данных
    //const searchParams = new URLSearchParams(regData);
    const searchParams = new URLSearchParams(userData);

    // Перенаправляем пользователя на страницу подтверждения с данными в URL
    window.location.href = `confirmation.html?${searchParams.toString()}`;
  });
