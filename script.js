document.addEventListener("DOMContentLoaded", function() {
    // Inicializa a primeira seção como visível
    showSection('intro');
});

function showSection(sectionId) {
    // Oculta todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        setTimeout(() => {
            section.style.display = 'none';
        }, 300); // Tempo da animação
    });

    // Remove a classe 'active' de todos os botões
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Exibe a seção selecionada
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
        setTimeout(() => {
            sectionToShow.style.opacity = '1';
        }, 10); // Atraso para aplicar a opacidade
    }

    // Adiciona a classe 'active' ao botão clicado
    const activeButton = document.querySelector(`button[onclick="showSection('${sectionId}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}
