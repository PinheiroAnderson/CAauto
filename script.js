const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            saudacao: 'Bem-vindo à CA Auto Serviços! Serviços de mecânica com qualidade e confiança.',
            anoAtual: new Date().getFullYear(),
            services: [
                { id: 1, img: 'img/breaks.png', title: 'Freios', alt: 'Freios' },
                { id: 2, img: 'img/inject.png', title: 'Injeção', alt: 'Injeção' },
                { id: 3, img: 'img/oilbat.png', title: 'Óleo e Bateria', alt: 'Óleo e Bateria' },
                { id: 4, img: 'img/susp.png', title: 'Suspensão', alt: 'Suspensão' }
            ]
        };
    },
    components: {
        'service-item': {
            props: ['img', 'title', 'alt'],
            template: `
                <div class="service-item">
                    <img :src="img" :alt="alt">
                    <h3>{{ title }}</h3>
                </div>
            `
        }
    },
    mounted() {
        this.atualizarSaudacao();
        setInterval(this.atualizarSaudacao, 60000); // Atualiza a cada minuto

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
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.nav');

        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
            const expanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !expanded);
        });
    },
    methods: {
        atualizarSaudacao() {
            const agora = new Date();
            const hora = agora.getHours();
            let saudacao = "";

            if (hora >= 5 && hora < 12) {
                saudacao = "☀️ Bom dia! Seja bem-vindo ao nosso site.";
            } else if (hora >= 12 && hora < 18) {
                saudacao = "🌤️ Boa tarde! Esperamos que seu dia esteja sendo produtivo.";
            } else {
                saudacao = "🌙 Boa noite! Aproveite nosso conteúdo antes de descansar.";
            }

            this.saudacao = saudacao;
        }
    }
});

app.mount('#app');