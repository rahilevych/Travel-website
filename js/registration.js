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

    const searchParams = new URLSearchParams(userData);

    window.location.href = `confirmation.html?${searchParams.toString()}`;
  });
