$('.slider-container').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    autoplaySpeed: 4000,
    dots: true,  
    variableWidth: true,
    dotsClass: 'slider-dots',
    nextArrow: '<div class="slider-arows__right"></div>',
    prevArrow: '<div class="slider-arows__left"></div>',  
    responsive: [
        {
          breakpoint: 1199,
            setting: {
              slidesToShow: 3
            }

        }
    ]
  });