const nameInput = document.getElementById('ai-name');
const saveButton = document.getElementById('save-name');

nameInput.addEventListener('input', () => {
  saveButton.disabled = nameInput.value.trim() === '';
});

saveButton.addEventListener('click', () => {
  const aiName = nameInput.value.trim() || "AIVA";
  localStorage.setItem('aiName', aiName);
  window.location.href = "voice-setup.html"; // Next step
});
