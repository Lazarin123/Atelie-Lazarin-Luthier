// Função para abrir o certificado em tela cheia
function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("imgModal");
    modal.style.display = "block";
    modalImg.src = src;
}

// Fechar modal ao clicar na tecla Esc
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        document.getElementById("modal").style.display = "none";
    }
});

// Suavização do Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
