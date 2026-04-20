// ============================================
// SCRIPT - BOUTIQUE FASHION
// Interatividade e animações
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Boutique Fashion - Landing Page Carregada!');
    
    // Animação de entrada dos elementos
    animarElementosAoCarregar();
    
    // Adicionar interatividade aos botões
    adicionarEventosBotoes();
});

// ============================================
// ANIMAÇÃO DE ENTRADA
// ============================================

function animarElementosAoCarregar() {
    const header = document.querySelector('.header');
    const teamCards = document.querySelectorAll('.team-card');
    const socialSection = document.querySelector('.social-section');
    
    // Animar header
    if (header) {
        header.style.animation = 'fadeInDown 0.8s ease-out';
    }
    
    // Animar cards da equipe
    teamCards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.8s ease-out ${index * 0.2}s both`;
    });
    
    // Animar seção de redes sociais
    if (socialSection) {
        socialSection.style.animation = 'fadeInUp 0.8s ease-out 0.6s both';
    }
}

// ============================================
// EVENTOS DOS BOTÕES
// ============================================

function adicionarEventosBotoes() {
    const botoesWhatsApp = document.querySelectorAll('.btn-whatsapp');
    const btnPrimary = document.querySelector('.btn-primary');
    
    // Feedback visual ao clicar em WhatsApp
    botoesWhatsApp.forEach(botao => {
        botao.addEventListener('click', function(e) {
            console.log('📱 Abrindo WhatsApp...');
        });
        
        botao.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        botao.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Feedback visual ao clicar no botão principal
    if (btnPrimary) {
        btnPrimary.addEventListener('click', function(e) {
            console.log('📍 Abrindo Google Maps...');
        });
    }
}

// ============================================
// ANIMAÇÕES CSS (definidas dinamicamente)
// ============================================

const estilo = document.createElement('style');
estilo.textContent = `
    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(estilo);

// ============================================
// SCROLL SUAVE (já está no CSS, mas reforçamos)
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// LOGS DO CONSOLE (para debug)
// ============================================

console.log('%c🎨 Boutique Fashion Premium', 'font-size: 20px; color: #1A3A52; font-weight: bold;');
console.log('%cDesenvolvido por Agostinho Carrara', 'font-size: 14px; color: #25D366;');
console.log('%cVercel + GitHub Deploy', 'font-size: 12px; color: #666;');
