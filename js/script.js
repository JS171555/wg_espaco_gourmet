// JavaScript para WG Espaço Gourmet

// Função para inicializar todas as funcionalidades
document.addEventListener('DOMContentLoaded', function () {
   // Inicializar ano atual no footer
   document.getElementById('current-year').textContent = new Date().getFullYear();

   // Inicializar vídeo aleatório
   loadRandomVideo();

   // Inicializar menu móvel
   initMobileMenu();

   // Inicializar animações GSAP
   initAnimations();

   // Inicializar seletores de tamanho
   initSizeSelectors();

   // Inicializar botões do WhatsApp
   initWhatsAppButtons();

   // Inicializar header sticky
   initStickyHeader();
});

// Função para carregar vídeo aleatório
function loadRandomVideo() {
   const videoFiles = [
      '001.mp4',
      '002.mp4',
      '003.mp4',
      '004.mp4',
      '005.mp4'
   ];

   // Selecionar vídeo aleatório
   const randomIndex = Math.floor(Math.random() * videoFiles.length);
   const selectedVideo = videoFiles[randomIndex];

   // Criar elemento de vídeo
   const videoElement = document.getElementById('hero-video');

   // Criar source para o vídeo
   const sourceElement = document.createElement('source');
   sourceElement.src = `./assets/videos/${selectedVideo}`;
   sourceElement.type = 'video/mp4';

   // Limpar vídeo existente e adicionar novo source
   videoElement.innerHTML = '';
   videoElement.appendChild(sourceElement);

   // Carregar e tocar o vídeo
   videoElement.load();
   videoElement.play().catch(error => {
      console.log("Autoplay não permitido:", error);
   });
}

// Função para inicializar menu móvel
function initMobileMenu() {
   const hamburger = document.getElementById('hamburger');
   const nav = document.getElementById('nav');
   const navLinks = document.querySelectorAll('.nav-link');

   // Alternar menu ao clicar no hamburger
   hamburger.addEventListener('click', function () {
      this.classList.toggle('active');
      nav.classList.toggle('active');

      // Animar entrada/saída do menu com GSAP
      if (nav.classList.contains('active')) {
         gsap.fromTo(nav, {
            x: 300,
            opacity: 0
         }, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out"
         });

         // Animar links do menu
         gsap.fromTo(navLinks, {
            x: 50,
            opacity: 0
         }, {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.4,
            delay: 0.2
         });
      }
   });

   // Fechar menu ao clicar em um link
   navLinks.forEach(link => {
      link.addEventListener('click', function () {
         hamburger.classList.remove('active');
         nav.classList.remove('active');
      });
   });
}

// Função para inicializar animações GSAP
function initAnimations() {
   // Animar elementos do hero
   gsap.to('.hero-title', {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out"
   });

   gsap.to('.hero-subtitle', {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.8,
      ease: "power3.out"
   });

   gsap.to('.cta-button', {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1.1,
      ease: "power3.out"
   });

   // Animar cards de produtos ao rolar
   gsap.registerPlugin(ScrollTrigger);

   gsap.utils.toArray('.product-card').forEach(card => {
      gsap.fromTo(card, {
         opacity: 0,
         y: 50
      }, {
         opacity: 1,
         y: 0,
         duration: 0.8,
         scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
         }
      });
   });

   // Animar seções ao rolar
   gsap.utils.toArray('.section-header').forEach(header => {
      gsap.fromTo(header, {
         opacity: 0,
         y: 30
      }, {
         opacity: 1,
         y: 0,
         duration: 0.8,
         scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none reverse"
         }
      });
   });

   // Animar mapa
   gsap.fromTo('.map-container', {
      opacity: 0,
      scale: 0.95
   }, {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
         trigger: '.location-section',
         start: "top 75%",
         toggleActions: "play none none reverse"
      }
   });
}

// Função para inicializar seletores de tamanho
function initSizeSelectors() {
   const sizeSelectors = document.querySelectorAll('.size-options');

   sizeSelectors.forEach(selector => {
      const sizeOptions = selector.querySelectorAll('.size-option');

      sizeOptions.forEach(option => {
         option.addEventListener('click', function () {
            // Remover classe active de todos os botões no grupo
            sizeOptions.forEach(opt => opt.classList.remove('active'));

            // Adicionar classe active ao botão clicado
            this.classList.add('active');
         });
      });
   });
}

// Função para inicializar botões do WhatsApp
function initWhatsAppButtons() {
   const whatsappButtons = document.querySelectorAll('.whatsapp-button');

   whatsappButtons.forEach(button => {
      button.addEventListener('click', function () {
         const productName = this.getAttribute('data-product');
         const sizeContainer = this.closest('.product-content').querySelector('.size-options');
         const selectedSize = sizeContainer.querySelector('.size-option.active').textContent;

         // Criar mensagem para WhatsApp
         const message = `Olá, gostaria de fazer um orçamento para o produto:\n\n*Produto:* ${productName}\n*Modelo:* ${productName}\n*Medida selecionada:* ${selectedSize}\n\nPoderia me passar mais informações?`;

         // Codificar mensagem para URL
         const encodedMessage = encodeURIComponent(message);

         // Abrir WhatsApp
         window.open(`https://wa.me/5511953760412?text=${encodedMessage}`, '_blank');
      });
   });

   // Configurar botão de CTA do hero
   const heroCtaButton = document.querySelector('.cta-button');
   if (heroCtaButton) {
      heroCtaButton.addEventListener('click', function (e) {
         // Se já tem link, não fazer nada
         if (this.getAttribute('href')) return;

         e.preventDefault();

         // Criar mensagem padrão para o hero
         const message = `Olá, vi o site da WG Espaço Gourmet e gostaria de fazer um orçamento. Poderia me ajudar?`;
         const encodedMessage = encodeURIComponent(message);

         window.open(`https://wa.me/5511953760412?text=${encodedMessage}`, '_blank');
      });
   }
}

// Função para inicializar header sticky
function initStickyHeader() {
   const header = document.getElementById('header');

   window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
         header.classList.add('scrolled');
      } else {
         header.classList.remove('scrolled');
      }
   });

   // Inicializar estado
   if (window.scrollY > 100) {
      header.classList.add('scrolled');
   }
}

// Função para rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
         window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
         });
      }
   });
});