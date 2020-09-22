$(document).ready(function() {
    $('.main__slider').slick({
        arrows: false,
        dots: true
    })
    $('.news__slider').slick({
        slidesToShow: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
    $('.header__burger').click(function(e) {
        $('.header__burger, .header__mobile, .header').toggleClass('active');
        $('body').toggleClass('lock')
   })
    $('.header__menu--square').click(function() {
        $('.header__menu--select').addClass('active')
    })
    $('.header__menu--selectTopImg').click(function() {
        $('.header__menu--select').removeClass('active')
    })
    $('.header__log--btn').click(function() {
        $('.form__auto').addClass('active')
        $('.login').addClass('active')
    })
    $('.form__auto--crossClose').click(function() {
        $('.form__auto').removeClass('active')
        $('.login').removeClass('active')
    })
    $('.header__nav--linkArrow').click(function() {
        $('.header__nav--hover').toggleClass('active')
    })
    $('.header__mobile--link').click(function() {
        $('.header__mobile--linkAcc').slideToggle() && $('.header__mobile--linkImg').toggleClass('active')
    })
})
