let arrImg = document.querySelectorAll("#imgSet img");
let carouselImg = document.querySelectorAll(".carousel-inner>.carousel-item");
$('.carousel').carousel ({
    interval:2000
});

$(arrImg).click(function () { 
    $(".carouselMain").carousel(document.querySelectorAll("#imgSet img"))
});
