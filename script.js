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

// Mostrar a mensagem dependendo do estado
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

let cartinhaAberta = false;

function abrirEnvelope() {
    const envelope = document.querySelector('.envelope');
    const mensagem = document.getElementById('mensagemCartinha');

    if (!cartinhaAberta) {
        envelope.classList.add('aberto');
        setTimeout(() => {
            mensagem.innerHTML = "Mamãe querida, você é o meu amor eterno. 💖<br>Obrigado por tudo que já fez e faz por mim. <br>Essa mensagem é só um pedacinho do que sinto por você!";
        }, 600);
        cartinhaAberta = true;
    }
}

// Criar corações flutuantes
function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerText = "❤️";
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = Math.random() * 20 + 10 + "px";
    document.querySelector(".coraçoes-container").appendChild(coracao);
    setTimeout(() => coracao.remove(), 4000);
}
setInterval(criarCoracao, 800);

// ------------------------
// Botão que desce e sobe
// ------------------------
let indoParaBaixo = true; // Controle da direção do scroll

function scrollPagina() {
    if (indoParaBaixo) {
        // Rola para o final da página
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
        document.getElementById("scrollBtn").innerHTML = '<i class="fas fa-chevron-up"></i>'; // Ícone para cima
    } else {
        // Rola para o topo da página
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        document.getElementById("scrollBtn").innerHTML = '<i class="fas fa-chevron-down"></i>'; // Ícone para baixo
    }

    // Alterna a direção para a próxima vez
    indoParaBaixo = !indoParaBaixo;
}

// Atualiza o ícone do botão conforme o rolar da página
window.addEventListener("scroll", () => {
    const btn = document.getElementById("scrollBtn");
    const icon = btn.querySelector("i");

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        // Ao chegar no final da página, muda o ícone para cima
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
    } else {
        // Caso contrário, mantém o ícone para baixo
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
    }
});
