// Criar corações animados que sobem na tela
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
  
  // Criar um coração novo a cada 500ms
  setInterval(createHeart, 500);
  