const mic = document.getElementById('mic');
const storage = document.getElementById('storage');
const notifications = document.getElementById('notifications');
const grantBtn = document.getElementById('grant-btn');

function checkPermissions() {
  if (mic.checked && storage.checked && notifications.checked) {
    grantBtn.disabled = false;
  } else {
    grantBtn.disabled = true;
  }
}

[mic, storage, notifications].forEach(el => {
  el.addEventListener('change', checkPermissions);
});

grantBtn.addEventListener('click', () => {
  localStorage.setItem('permissionsGranted', 'true');
  window.location.href = "main-chat.html"; // final step
});
