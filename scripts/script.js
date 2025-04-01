const themeSwitcherButtons = document.querySelectorAll('.header__theme-menu-button');

function handleThemeSwitch(event) {
  const clickedButton = event.currentTarget;
  
  themeSwitcherButtons.forEach((button) => {
    button.classList.remove('header__theme-menu-button_active');
    button.disabled = false;
  });

  let selectedTheme;
  if (clickedButton.classList.contains('header__theme-menu-button_type_light')) {
    selectedTheme = 'light';
  } else if (clickedButton.classList.contains('header__theme-menu-button_type_dark')) {
    selectedTheme = 'dark';
  } else {
    selectedTheme = 'auto';
  }

  applyTheme(selectedTheme);
  
  clickedButton.classList.add('header__theme-menu-button_active');
  clickedButton.disabled = true;
}

function applyTheme(theme) {
  document.body.className = 'page';
  document.body.classList.add(`theme_${theme}`);
  localStorage.setItem('theme', theme);
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    applyTheme(savedTheme);
    
    themeSwitcherButtons.forEach((button) => {
      button.classList.remove('header__theme-menu-button_active');
      button.disabled = false;
      
      if (button.classList.contains(`header__theme-menu-button_type_${savedTheme}`)) {
        button.classList.add('header__theme-menu-button_active');
        button.disabled = true;
      }
    });
  }
}

themeSwitcherButtons.forEach((button) => {
  button.addEventListener('click', handleThemeSwitch);
});

initializeTheme();