function atualizarSaudacao() {
    const agora = new Date();
    const hora = agora.getHours();
    const elemento = document.getElementById('meu-letreiro');
    let saudacao = "";

    if (hora >= 5 && hora < 12) {
        saudacao = "☀️ Bom dia! Seja bem-vindo ao nosso site.";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "🌤️ Boa tarde! Esperamos que seu dia esteja sendo produtivo.";
    } else {
        saudacao = "🌙 Boa noite! Aproveite nosso conteúdo antes de descansar.";
    }

    elemento.innerText = saudacao;

    
    document.getElementById("anoAtual").textContent = new Date().getFullYear();
}


window.onload = atualizarSaudacao;

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Menu hambúrguer com acessibilidade
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !expanded);
    });
});