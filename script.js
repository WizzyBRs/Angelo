document.addEventListener('DOMContentLoaded', () => {
    const contentBox = document.querySelector('.main-box');

    // Função para animação de pulsação
    const pulseAnimation = () => {
        contentBox.classList.add('pulse');
        setTimeout(() => {
            contentBox.classList.remove('pulse');
        }, 2000); // A animação dura 2 segundos
    };

    // Chama a animação ao carregar a página
    pulseAnimation();
});
