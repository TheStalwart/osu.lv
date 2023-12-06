document.addEventListener('DOMContentLoaded', function() {
  changeLanguage('en'); // Set a default language
});

function changeLanguage(lang) {
  fetch(`${lang}.json`)
    .then(response => response.json())
    .then(data => {
      document.title = data.page_title;
      document.getElementById('home').textContent = data.home;
      document.getElementById('discord').textContent = data.discord;
      document.getElementById('languageDropdown').textContent = data.languageDropdown;
    })
    .catch(error => console.error('Error loading language file:', error));
}
