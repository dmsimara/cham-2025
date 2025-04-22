document.addEventListener('DOMContentLoaded', () => {
    const confettiColors = ['#F6C0D0', '#8E7C93', '#D0A5C0', '#485665', '#1E3231'];
    const confettiCount = 80;
  
    function createConfetti() {
      const container = document.createElement('div');
      container.classList.add('confetti-container');
      document.body.appendChild(container);
  
      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(confetti);
      }
  
      // Remove confetti container after 6 seconds
      setTimeout(() => {
        container.remove();
      }, 6000);
    }
  
    createConfetti();
  });

