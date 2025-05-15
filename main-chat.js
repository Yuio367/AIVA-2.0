const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const messages = document.getElementById("messages");

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.textContent = `${sender}: ${text}`;
  msg.style.marginBottom = "10px";
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

sendBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text) {
    appendMessage("You", text);
    input.value = "";
    setTimeout(() => {
      appendMessage("AIVA", "I'm still learning to respond. Stay tuned.");
    }, 600);
  }
});
