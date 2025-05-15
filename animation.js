// animation.js
document.addEventListener('DOMContentLoaded', () => {
  const animation = document.getElementById('opening-animation');

  // Remove the animation div after fadeOut animation ends (4.5s total: 3s delay + 1.5s fade)
  animation.addEventListener('animationend', () => {
    animation.style.display = 'none';
    // You can trigger next step here (e.g., show Terms page)
  });
});
