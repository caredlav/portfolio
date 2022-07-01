window.addEventListener("load", () => {
  let carouselElement = document.querySelector('.carousel-list');

  new Glider(carouselElement, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.carousel-indicators',
    arrows: {
      prev: '.carousel-previous',
      next: '.carousel-next'
    },
    responsive: [
      {
        // screens greater than >= 768px
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          draggable: true
        }
      }, {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          draggable: false
        }
      }
    ]
  });
});