const voicePasswordInput = document.getElementById('voice-password');
const commandInput = document.getElementById('voice-command');
const commandList = document.getElementById('voice-commands-list');
const addButton = document.getElementById('add-command');
const continueButton = document.getElementById('continue');

let commands = [];

function updateContinueStatus() {
  continueButton.disabled = !voicePasswordInput.value.trim() || commands.length === 0;
}

addButton.addEventListener('click', () => {
  const cmd = commandInput.value.trim();
  if (cmd && commands.length < 10) {
    commands.push(cmd);
    const item = document.createElement('div');
    item.textContent = `#${commands.length}: ${cmd}`;
    commandList.appendChild(item);
    commandInput.value = '';
    updateContinueStatus();
  }
});

voicePasswordInput.addEventListener('input', updateContinueStatus);

continueButton.addEventListener('click', () => {
  localStorage.setItem('voicePassword', voicePasswordInput.value.trim());
  localStorage.setItem('voiceCommands', JSON.stringify(commands));
  alert("Voice setup complete. This voice will be your main access.");
  window.location.href = "permissions.html"; // next step
});
