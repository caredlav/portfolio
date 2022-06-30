document.addEventListener('DOMContentLoaded',()=>{
    const elementsCarousel=document.querySelectorAll('.carousel');
    M.Carousel.init(elementsCarousel,{
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 5,
        indicators: true,
        noWrap: false
    });
});