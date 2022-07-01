document.addEventListener('DOMContentLoaded', () => {
    const carouselElements = document.querySelectorAll('.carousel');

    M.Carousel.init(carouselElements, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 5,
        indicators: true,
        noWrap: false
    });
});