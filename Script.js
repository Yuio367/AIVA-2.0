// File: script.js

const aivaIcon = document.getElementById('aiva-icon');
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const messages = document.getElementById('messages');

// Toggle chat visibility
aivaIcon.addEventListener('click', () => {
  chatBox.classList.toggle('active');
});

// Simulate AI response
function respondToUser(input) {
  const lower = input.toLowerCase();
  if (lower.includes("hello") || lower.includes("hi")) {
    return "Hey there! I'm AIVA. What can I do for you?";
  } else if (lower.includes("name")) {
    return "I'm AIVA — the AI that knows you.";
  } else if (lower.includes("bye")) {
    return "Talk to you soon!";
  } else {
    return "I'm listening. What else would you like to do?";
  }
}

// Add a message to the chat
function appendMessage(text, sender = 'user') {
  const msg = document.createElement('div');
  msg.textContent = text;
  msg.style.padding = '8px 12px';
  msg.style.margin = '5px';
  msg.style.borderRadius = '12px';
  msg.style.maxWidth = '80%';
  msg.style.wordWrap = 'break-word';

  if (sender === 'user') {
    msg.style.alignSelf = 'flex-end';
    msg.style.background = '#e0e7ff';
  } else {
    msg.style.alignSelf = 'flex-start';
    msg.style.background = '#f3f4f6';
  }

  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

// Handle send button
sendBtn.addEventListener('click', () => {
  const input = userInput.value.trim();
  if (!input) return;

  appendMessage(input, 'user');
  const response = respondToUser(input);
  setTimeout(() => appendMessage(response, 'aiva'), 600);

  userInput.value = '';
});

// Optional: Handle Enter key
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') sendBtn.click();
});
