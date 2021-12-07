const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;

        // сохраняем значение атрибута кнопки в переменную при помощи методу гетатрибут
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if ( ! currentBtn.classList.contains("active")) {

            tabsBtn.forEach(function(item) {
                item.classList.remove("active");
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove("active");
            });
        }        

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
    });
});

// выбираю все табы

    // const tabsSlick = document.querySelectorAll(".tabs__item");

    // tabsSlick.forEach (function(tab) {
    //     let tabs = tab

    //     if (tabs.classList.contains ("tabs__item active")) {
    //         $(document).ready(function() {

    //             $('.slider-tab__container').slick({
    //               autoplay: false,
    //               infinite: true,
    //               slidesToShow: 1,
    //               slidesToScroll: 1,
    //               arrows: true,
    //               autoplaySpeed: 2500,
    //               dots: false,   
    //               nextArrow: '<div class="slider-arows__right"></div>',
    //               prevArrow: '<div class="slider-arows__left"></div>'
    //             });             
              
    //            });
    //     } 
        
    //     else {
    //         $(document).ready(function() {             
              
    //             $('.slider-tab__container').slick ('unslick');
              
    //            });
    //     }       
    // });
