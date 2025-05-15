document.addEventListener("DOMContentLoaded", () => {
  const logoScreen = document.getElementById("logo-screen");
  const termsScreen = document.getElementById("terms-screen");

  // Start with animation, then show terms screen
  setTimeout(() => {
    logoScreen.classList.remove("active");
    logoScreen.classList.add("hidden");
    termsScreen.classList.remove("hidden");
    termsScreen.classList.add("active");
  }, 2500); // logo animation duration

  // Button listeners
  document.getElementById("accept-btn").addEventListener("click", () => {
    alert("You accepted the terms. Proceeding to next setup... (to be implemented)");
    // Later: redirect to next setup screen
  });

  document.getElementById("decline-btn").addEventListener("click", () => {
    alert("You must accept the terms to use AIVA.");
    // Optionally close tab or block further actions
  });

  // Link to full terms
  document.getElementById("view-terms").addEventListener("click", () => {
    alert("This would link to full Terms & Conditions page inside the settings (planned feature).");
  });
});
