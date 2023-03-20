let themes = document.querySelectorAll('[name="theme"]');

const storeTheme = (content) => {
  localStorage.setItem('theme', content);
};

themes.forEach((option) => {
  option.addEventListener('click', () => {
    storeTheme(option.id);
    // fallback for no :has() support
    document.documentElement.className = option.id;
  });
});


// read data from localStorage on load 
function setColorTheme() {
  let activeTheme = localStorage.getItem('theme');

  themes.forEach((themeVariations) => {
    if (themeVariations.id === activeTheme) {
      themeVariations.checked = true;
    }
  });
  // fallback for no :has() support
  document.documentElement.className = activeTheme;
}

document.onload = setColorTheme();
