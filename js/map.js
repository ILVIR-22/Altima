ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.717438, 55.954065],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        });
        myMap.behaviors.disable('scrollZoom')
        myMap.events.add('click', function(){
        myMap.behaviors.enable('scrollZoom')
        })
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'АЛЬТИМА строй',
            balloonContent: 'Строительная компания'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'icons/icon-home.png',
            // Размеры метки.
            iconImageSize: [30, 39],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-10, -30]
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});