document.getElementById('nextBtn').addEventListener('click', () => {
  const selectedLang = document.getElementById('languageSelect').value;
  localStorage.setItem('aiva_language', selectedLang);
  window.location.href = "train.html"; // Will be created next
});
