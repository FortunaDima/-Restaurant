navigator.geolocation.getCurrentPosition(function(position) {
    coords = position.coords;
    let latitude = position.coords.latitude; // широта
    let longitude = position.coords.longitude; // долгота
    // let path= 'https://www.openstreetmap.org/#map=18/'+ latitude +'/' + longitude;
    // let link = document.querySelector('.link');
    // link.innerHTML = "<a href='" + path + "'>Посмотреть местоположение</a>";
    let map = new ol.Map({ //создаем карту из библиотеки OpenLayers
        target: 'map', //указываем id контейнера для карты
        layers: [ //создаем массив, в котором указываем источник данных для карты
        new ol.layer.Tile({
          source: new ol.source.OSM() // наша карта берет данные из OpenStreetMap
        })],
        view: new ol.View({ // настройка внешнего вида карты
        center: ol.proj.fromLonLat([longitude, latitude]), //широта и долгота
        zoom: 10 //увеличение
        })
      });
    console.log(coords);
});


let start =0;
let end =0;



function forward(){
    anime({
        targets: '.menu-small',
        translateX:['-100%','0'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false 

    });

    anime({
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false

    });
    condition = false;

} 
function backforward(){
    anime({
        targets: '.menu-small',
        translateX:['0','-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false 
    });
    anime({
        targets: '.menu_small_icon',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = true;

}





let condition = true;
$('.menu_small_icon').click(function () {
    if (condition){
        forward();
        
        
    } else {
        backforward();
       

    }

});

$('.container').on('touchstart', function(event){
    start = event.originalEvent.touches[0].pageX;

})

$('.container').on('touchend', function(event){
    end=event.originalEvent.changedTouches[0].pageX;
    if (end - start >=100 && condition){
        forward();
    }
    else if (start-end>= 100 && !condition){
        backforward();

    }
    
})


