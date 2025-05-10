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
  
  function mostrarMensagem(estado) {
    const mensagem = document.getElementById("mensagem");
    let texto = "";
  
    switch (estado) {
      case "feliz":
        texto = "Que bom que você está feliz! Você merece todos os sorrisos do mundo. 😄";
        break;
      case "triste":
        texto = "Ei, mamãe… tudo vai ficar bem. Respira fundo. Estou com você sempre. 💖";
        break;
      case "carinho":
        texto = "Você é a melhor mãe do universo! Receba todo meu amor e um abraço apertado. 🤗";
        break;
      case "forca":
        texto = "Você é forte, guerreira e linda. Já venceu tanto! Nunca se esqueça disso. 💪💝";
        break;
      default:
        texto = "";
    }
  
    mensagem.textContent = texto;
  }
  