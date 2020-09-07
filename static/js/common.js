$(function() {
    if ($(document).height() <= $(window).height())
        $("footer.footer").addClass("navbar-fixed-bottom");});
// Elements SVG

$(window).on('scroll', function() {
    let $this = $(this),
        $toTop = $('.top-btn'),
        $header = $('.header');
    if ($this.scrollTop() > 40) {
        $header.addClass('header-sticky');
    }else {
        $header.removeClass('header-sticky');
    }
    if ($this.scrollTop() > 700) {
        $toTop.addClass('visible')
    }else{
        $toTop.removeClass('visible')
    }
});

$('.btn-nav').on('click', function (e) {
    let $this = $(this);
    $this.toggleClass('open');
    $('.header-wrap__nav').toggleClass('open');
});

// scroll top
$('.top-btn').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
    });


// popup
$('.popup-btn').on('click', function () {
    const $thisData = $(this).attr('data-popup');
    $(".popup[data-popup='" + $thisData +"']").addClass('active');
});

$('.popup-close, .popup-overlay').on('click', function () {
    const $this = $(this).parents('.popup');
    $this.removeClass('active');
});

AOS.init({
    offset: 50,
});




// new site script

$('.btn-nav').on('click', function (e) {
   const $this = $(this);
    $this.toggleClass('active');
    $('.header-mobile').toggleClass('open');
});

function mainCounter(){
    var counters = $(".main-count__item span");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        }, 1);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
}
mainCounter();
$('.main-slider').slick({
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    arrows: false,
    fade: true,
    cssEase: 'linear',
});
$('.testimonials-slider').slick({
    dots: false,
    arrows: true,
    prevArrow: $('.testimonials-slider__arrow-prev'),
    nextArrow: $('.testimonials-slider__arrow-next'),
});
$('.brands-slider').slick({
    dots: false,
    arrows: false,
    slidesToShow:5,
    slidesToScroll:1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 3000,
                autoplay: true,
            }
        }
    ]

});
function paginationMainSlider() {
    var allMainSlide = $('.main-slider .slide').length;
    var activeMainSlide = $('.main-slider .slide.slick-active').data('slick-index') + 1;
    if(allMainSlide < 10){
        $('.main-slider__pagination-all').text('0' + allMainSlide);

    }else{
        $('.main-slider__pagination-all').text(allMainSlide);
    }
    if(activeMainSlide < 10){
        $('.main-slider__pagination-active').text('0' + activeMainSlide);
    }else{
        $('.main-slider__pagination-active').text(activeMainSlide);
    }
}
paginationMainSlider();
$(".main-slider").on("afterChange", function (){
    paginationMainSlider();
});
$(".header a[href^='#'], .footer a[href^='#']").on('click', function (e){
    e.preventDefault();
    var $this = $(this);
    $('html, body').animate({
        scrollTop: $($this.attr("href")).offset().top - 100
    }, 1200);
    $('.header-mobile').removeClass('open');
    $('.btn-nav').removeClass('open')
});

$('.features-wrap__marker').on('click', function (e) {
   var  $this = $(this);
   var $thisData = $this.data('features');
   $('.features-wrap__marker ,  .features-wrap__item').removeClass('active');
   $this.addClass('active');
   $(".features-wrap__item[data-features='" + $thisData +"']").addClass('active');
});
$('.technology-item__marker').on('click', function (e) {
    var  $this = $(this);
    $('.technology-item__info, .technology-item__marker').removeClass('active');
    $this.addClass('active');
    $this.parent().find('.technology-item__info').addClass('active');
});
$(window).on('load',function () {
   var windowSize  = $(window).width();
   if(windowSize < 992){
       $('.features-wrap__marker').on('click', function (e) {
           $('html, body').animate({
               scrollTop: $(".features-wrap__description").offset().top - 150
           }, 1000);
       });
   }
});