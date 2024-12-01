const themeButtons = document.querySelectorAll('.header__theme-menu-button');

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });

    let theme = '';
    if (button.classList.contains('header__theme-menu-button_type_light')) {
      theme = 'light';
    } else if (button.classList.contains('header__theme-menu-button_type_dark')) {
      theme = 'dark';
    } else {
      theme = 'auto';
    }

    changeTheme(theme);

    button.classList.add('header__theme-menu-button_active');
    button.setAttribute('disabled', true);
  });
});

function changeTheme(theme) {
  document.body.className = 'page'; // Сбрасываем все классы и применяем базовый
  document.body.classList.add(`theme_${theme}`); // Добавляем соответствующую тему

  localStorage.setItem('theme', theme); // Сохраняем тему в localStorage
}

function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    changeTheme(theme);
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });
    // Устанавливаем активную кнопку в зависимости от сохранённой темы
    document
      .querySelector(`.header__theme-menu-button_type_${theme}`)
      .classList.add('header__theme-menu-button_active');
    document
      .querySelector(`.header__theme-menu-button_type_${theme}`)
      .setAttribute('disabled', true);
  }
}

initTheme(); // Инициализация темы при загрузке страницы
