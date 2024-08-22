document.addEventListener('DOMContentLoaded', () => {
    const javaBox = document.getElementById('java-animation');

    // Adiciona um efeito de animação quando a seção é exibida
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                javaBox.style.transform = 'scale(1.2)';
            } else {
                javaBox.style.transform = 'scale(1)';
            }
        });
    });

    observer.observe(javaBox);
});
