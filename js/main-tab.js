$(document).ready(function() {

  $('.slider-tab__container').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 2500,
    dots: false,   
    nextArrow: '<div class="slider-arows__right"></div>',
    prevArrow: '<div class="slider-arows__left"></div>'
  });

  // $('.slider-tab__container').slick ('unslick');

 });


// const tabsSlick = document.querySelectorAll(".tabs__item");

//     tabsSlick.forEach (function(tab) {
//         let tabs = tab

//         if (tabs.classList.contains ("tabs__item active")) {
//             $(document).ready(function() {

//                 $('.slider-tab__container').slick({
//                   autoplay: false,
//                   infinite: true,
//                   slidesToShow: 1,
//                   slidesToScroll: 1,
//                   arrows: true,
//                   autoplaySpeed: 2500,
//                   dots: false,   
//                   nextArrow: '<div class="slider-arows__right"></div>',
//                   prevArrow: '<div class="slider-arows__left"></div>'
//                 });             
              
//                });
//         } else {
//             $(document).ready(function() {             
              
//                 $('.slider-tab__container').slick ('unslick');
              
//                });
//         }       
//     });
