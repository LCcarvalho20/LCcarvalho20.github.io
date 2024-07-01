document.addEventListener('DOMContentLoaded', function () {
    const paragraphs = document.querySelectorAll('.carousel-content p');
    const carouselContent = document.querySelector('.carousel-content');
    let currentPanelIndex = 0;

    function showPanel(index) {
        paragraphs.forEach((p, i) => {
            if (i === index) {
                p.classList.add('active');
            } else {
                p.classList.remove('active');
            }
        });
    }

    function rotatePanels() {
        setInterval(() => {
            showPanel(currentPanelIndex);
            currentPanelIndex++;
            if (currentPanelIndex >= paragraphs.length) {
                currentPanelIndex = 0;
            }
        }, 5000); // Troca de parágrafos a cada 5 segundos (5000 milissegundos)
    }

    rotatePanels();
});
