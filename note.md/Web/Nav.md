# 纵向导航栏

能用了，还不会造。

- 响应式，一list两用，竖的导航栏有滑轮，横着的item多了可以隐藏（.d-none）。
- 可以有子孙drop down
- <1mb 几乎秒开

## 引入文件

```html
<head>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    
    <!-- Vendor CSS Files -->
    <link href="css/bootstrap.min.css" rel="stylesheet"><!--可用网站link代替部分-->
    <link rel="stylesheet" href="http://at.alicdn.com/t/font_2375203_rm55r7qhvs9.css">
    <link href="css/style.css" rel="stylesheet">

<!-- Template Main JS File 可以放在最后引入-->
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.sticky.js"></script><!--    固定top的jq插件-->
    <script src="js/main.js"></script>
```

## css

main.css

```css
/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
body {
  font-family: "Open Sans", sans-serif;
  color: #444;
}

a {
  color: #428bca;
}

a:hover {
  color: #9eccf4;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6, .font-primary {
  font-family: "Raleway", sans-serif;
}

/*--------------------------------------------------------------
# icon(part of)
--------------------------------------------------------------*/
.icon-menu2, .icon-close-bold{
  font-weight: 800;
  /*font-style: normal;*/
  font-size: 1em;
  speak: none;
  font-style: normal;
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  height: 70px;
  transition: all 0.5s;
  padding: 10px 0;
  background: #fff;
  z-index: 997;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
}

/*#header.header-scrolled {*/
/*  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);*/
/*}*/

#header .logo h1 {
  font-size: 28px;
  margin: 0;
  padding: 10px 0;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
}

#header .logo h1 a, #header .logo h1 a:hover {
  color: #1c5c93;
  text-decoration: none;
}

#header .logo img {
  padding: 0;
  margin: 0;
  max-height: 40px;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Desktop Navigation */
.nav-menu, .nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu > ul > li {
  position: relative;
  white-space: nowrap;
  float: left;
}

.nav-menu a {
  display: block;
  position: relative;
  color: #5c768d;
  padding: 12px 15px;
  transition: 0.3s;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
}

.nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {
  color: #428bca;
  text-decoration: none;
}

.nav-menu .drop-down ul {
  display: block;
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  padding: 10px 0;
  background: #fff;
  box-shadow: 0 0 30px rgba(127, 137, 161, 0.25);
  transition: ease all 0.3s;
}

.nav-menu .drop-down:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.nav-menu .drop-down li {
  min-width: 180px;
  position: relative;
}

.nav-menu .drop-down ul a {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  text-transform: none;
  color: #103453;
}

.nav-menu .drop-down ul a:hover, .nav-menu .drop-down ul .active > a, .nav-menu .drop-down ul li:hover > a {
  color: #428bca;
}

.nav-menu .drop-down > a:after {
  /*下箭头*/
  content: "\e604";
  font-family: "iconfont";
  padding-left: 5px;
  /*font-weight: 800;*/
}

.nav-menu .drop-down .drop-down ul {
  top: 0;
  left: 100%;
}

.nav-menu .drop-down .drop-down:hover > ul {
  opacity: 1;
  top: 0;
}

.nav-menu .drop-down .drop-down > a {
  padding-right: 35px;
}

.nav-menu .drop-down .drop-down > a:after {
  /*右箭头*/
  content: "\e667";
  font-family: "iconfont";
  position: absolute;
  right: 15px;
  /*font-weight: 800;*/
}

@media (max-width: 1366px) {
  .nav-menu .drop-down .drop-down ul {
    left: -90%;
  }
  .nav-menu .drop-down .drop-down:hover > ul {
    left: -100%;
  }
  .nav-menu .drop-down .drop-down > a:after {
    /*右箭头*/
    content: "\e667";
    /*font-weight: 800;*/
  }
}

/* Mobile Navigation */
.mobile-nav {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 9999;
  overflow-y: auto;
  left: -260px;
  width: 260px;
  padding-top: 18px;
  background: #1f3548;
  transition: 0.4s;
}

.mobile-nav * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.mobile-nav a {
  display: block;
  position: relative;
  color: #e3f0fc;
  padding: 10px 20px;
  font-weight: 500;
}

.mobile-nav a:hover, .mobile-nav .active > a, .mobile-nav li:hover > a {
  color: #9eccf4;
  text-decoration: none;
}

.mobile-nav .drop-down > a:after {
  /*下箭头*/
  content: "\e604";
  font-family: "iconfont";
  padding-left: 10px;
  position: absolute;
  right: 15px;
  font-weight: 800;
}

.mobile-nav .active.drop-down > a:after {
  content: "\e667";
  font-weight: 800;
}

.mobile-nav .drop-down > a {
  padding-right: 35px;
}

.mobile-nav .drop-down ul {
  display: none;
  overflow: hidden;
}

.mobile-nav .drop-down li {
  padding-left: 20px;
}

.mobile-nav-toggle {
  position: fixed;
  right: 15px;
  top: 20px;
  z-index: 9998;
  border: 0;
  background: none;
  font-size: 24px;
  transition: all 0.4s;
  outline: none !important;
  line-height: 1;
  cursor: pointer;
  text-align: right;
}

.mobile-nav-toggle i {
  color: #5c768d;
}

.mobile-nav-overly {
  width: 100%;
  height: 100%;
  z-index: 9997;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(31, 53, 72, 0.7);
  overflow: hidden;
  display: none;
}

.mobile-nav-active {
  overflow: hidden;
}

.mobile-nav-active .mobile-nav {
  left: 0;
}

.mobile-nav-active .mobile-nav-toggle i {
  color: #fff;
}
```

## html

header像是在z-index：2，浮在上面

结构：container 左右两个盒子（logo| list）

#类似//float-left 都在 bootstrap.css 可以在写html时就调用，并且有！import（whatever baba）

```html
<header id="header">
    <div class="container"> 
        <div class="logo float-left"> 
            <h1 class="text-light"><a href="index.html"><span>Mamba</span></a></h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>
        </div>
	
        <nav class="nav-menu float-right d-none d-lg-block">
            <ul>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#team">Team</a></li>
                <li class="drop-down"><a href="">Drop Down</a>
                    <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li class="drop-down"><a href="#">Drop Down 2</a>
                            <ul>
                                <li><a href="#">Deep Drop Down 1</a></li>
                                <li><a href="#">Deep Drop Down 2</a></li>
                                <li><a href="#">Deep Drop Down 3</a></li>
                                <li><a href="#">Deep Drop Down 4</a></li>
                                <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                        <li><a href="#">Drop Down 5</a></li>
                    </ul>
                </li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav><!-- .nav-menu -->

    </div>
</header>
```

## js

main.js

```javascript
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
  $("#header").sticky({
    topSpacing: 0,
    zIndex: '50'
  });

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
```

## #点击后

```html
<body class="mobile-nav-active">
<nav class="mobile-nav d-lg-none">
    <ul>
        <li class="active"><a href="#header">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#team">Team</a></li>
        <li class="drop-down"><a href="">Drop Down</a>
            <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li class="drop-down"><a href="#">Drop Down 2</a>
                    <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                </li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
                <li><a href="#">Drop Down 5</a></li>
            </ul>
        </li>
        <li><a href="#contact">Contact Us</a></li>
    </ul>
</nav>
<div class="mobile-nav-overly"></div>
```



