const { createApp } = Vue;

const app = createApp({
    // Dados reativos da aplicação
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

    // Componentes da aplicação
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

    // Lifecycle hook: executado após a montagem do componente
    mounted() {
        this.atualizarSaudacao();
        this.iniciarIntervaloSaudacao();
        this.configurarSmoothScroll();
        this.configurarMenuHamburger();
    },

    // Métodos da aplicação
    methods: {
        /**
         * Atualiza a saudação baseada no horário atual
         */
        atualizarSaudacao() {
            const agora = new Date();
            const hora = agora.getHours();
            let saudacao = '';

            if (hora >= 5 && hora < 12) {
                saudacao = '☀️ Bom dia! Seja bem-vindo ao nosso site.';
            } else if (hora >= 12 && hora < 18) {
                saudacao = '🌤️ Boa tarde! Esperamos que seu dia esteja sendo produtivo.';
            } else {
                saudacao = '🌙 Boa noite! Aproveite nosso conteúdo antes de descansar.';
            }

            this.saudacao = saudacao;
        },

        /**
         * Inicia o intervalo para atualizar a saudação a cada minuto
         */
        iniciarIntervaloSaudacao() {
            setInterval(this.atualizarSaudacao, 60000);
        },

        /**
         * Configura o smooth scroll para links de âncora
         */
        configurarSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(anchor.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        },

        /**
         * Configura o menu hambúrguer com acessibilidade
         */
        configurarMenuHamburger() {
            const hamburger = document.querySelector('.hamburger');
            const nav = document.querySelector('.nav');

            if (hamburger && nav) {
                hamburger.addEventListener('click', () => {
                    nav.classList.toggle('active');
                    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
                    hamburger.setAttribute('aria-expanded', !expanded);
                });
            }
        }
    }
});

// Monta a aplicação Vue no elemento com id 'app'
app.mount('#app');