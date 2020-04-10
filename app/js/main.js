$(function(){

    $('.burger__menu').on('click', function(){
        $('.header__menu-list,.burger__menu, .header__logo ').toggleClass('active')
    });

    new WOW().init();
    
});