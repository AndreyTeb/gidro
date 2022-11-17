$(function(){
    $('.banner-section__slider').slick({
      dots: true,
      prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/icons/arrow-left.svg" alt=""></button>',
      nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/icons/arrow-right.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 969,
          settings: {
            arrows: false
          }
        },
      ]
    });

    $('.tab').on('click', function(e){
      e.preventDefault();

      $($(this).siblings()).removeClass('tab--active');
      $($(this).closest('.tabs-wrapper').siblings().find('.tabs-content')).removeClass('tabs-content--active');

      $(this).addClass('tab--active');
      $($(this).attr('href')).addClass('tabs-content--active');

      $('.slick-slider').slick('setPosition');
    });

    $('.product-item__favorite').on('click', function() {
      $(this).toggleClass('product-item__favorite--active');
    });

    $('.product-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/icons/arrow-black-left.svg" alt=""></button>',
      nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/icons/arrow-black-right.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 1301,
          settings: {
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 3,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 871,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 591,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    });

    $('.filter-style').styler();

    $('.filter__item-drop, .filter-extra').on('click', function(){

      $(this).toggleClass('filter__item-drop--active');
      $(this).next().slideToggle(200);

    });

    $(".js-range-slider").ionRangeSlider({
      hide_from_to: true,
      step: 100000
    });

    $('.catalog__filter-btngrid').on('click', function(){
      $(this).addClass('catalog__filter-button--active');
      $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
      $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });
    $('.catalog__filter-btnline').on('click', function(){
      $(this).addClass('catalog__filter-button--active');
      $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
      $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });

    $(".rate-yo").rateYo({
      normalFill: "#C4C4C4",
      ratedFill: "#1C62CD",
      readOnly: true,
      spacing: "7px"
    });

    $('.menu__btn').on('click', function(){
      $('.menu__mobile-list').toggleClass('menu__mobile-list--active');
    });

    $('.footer__top-drop').on('click', function(){
      $(this).next().slideToggle();
      $(this).toggleClass('footer__top-drop--active');
    });

    $('.aside__btn').on('click', function(){
      $(this).next().slideToggle();
    });
});