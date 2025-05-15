// File: terms.js

document.getElementById("accept-btn").onclick = function () {
  document.getElementById("terms-screen").style.display = "none";
  // Load next screen here (e.g. language-name setup)
  // loadScreen("language-screen");
};

document.getElementById("decline-btn").onclick = function () {
  alert("You must accept the terms to use AIVA. Closing now.");
  window.close();
};

document.getElementById("view-terms-link").onclick = function (e) {
  e.preventDefault();
  // Navigate to full T&C in settings later
  alert("This will redirect to the full Terms and Conditions in settings.");
};
