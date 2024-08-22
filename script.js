function showTab(tabId) {
    // Esconder todas as abas
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // Mostrar a aba selecionada
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';
}
