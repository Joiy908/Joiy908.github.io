/**
* Template Name: Mamba - v2.0.1
* Template URL: https://bootstrapmade.com/mamba-one-page-bootstrap-template-free/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  //滚轮>100(上滑界面)，才有阴影
  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Stick the header at top on scroll 固定header 在顶端、外层！！！！
  // $("#header").sticky({
  //   topSpacing: 0,
  //   zIndex: '50'
  // });

  // Mobile Navigation 加那个菜单&按钮
  if ($('.nav-menu').length) {  //如果有nav，
    let $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });     // d-lg-none去掉，就可以在大屏显示了
    $('body').append($mobile_nav);                                                      //icofont-navigation-menu
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="iconfont icon-menu2" style=""></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>'); //浅色覆盖overflow
    //点击换图标
    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icon-menu2 icon-close-bold');//元素互换
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      let container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icon-menu2 icon-close-bold');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

})(jQuery);