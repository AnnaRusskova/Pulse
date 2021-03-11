$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src=img/icons/arrow_left.png></button>',
        nextArrow: '<button type="button" class="slick-next"><img src=img/icons/arrow_right.png></button>',
        responsive: [
            {
                breakpoint: 992, /* действует от 0 до 1024, что выше - по обычному правилу сверху */
                settings: {
                dots: true,
                arrows: false,/* выключили стрелки */
                }
            }
        ]
      });
});