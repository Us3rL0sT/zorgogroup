$(document).ready(function($){
    $('.menu').click(function(e) {
        e.preventDefault();
        $('.burger').addClass('open');
        $('.overlay').fadeIn();
    });
    
    $('.overlay, .burgerclose').click(function(){
        $('.burger').removeClass('open');
        $('.overlay').fadeOut();
    })

    $('.certificateslider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEasy: 'ease-out',
        dots: false,
        variableWidth: false,
        nextArrow: $('.certificatearrowfor'),
        prevArrow: $('.certificatearrow'),
        responsive: [
            {
            breakpoint: 1381,
            settings: {
                slidesToShow: 5,
            }
            },
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
            },
            {
            breakpoint: 993,
            settings: {
                slidesToShow: 3,
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

            })
});

