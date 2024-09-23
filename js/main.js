// scroll to top button
//Get the button
var mybutton = document.getElementById('topBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
$(document).ready(function () {
  $(window).scroll(function () {
    var top = $('.mainVisual').offset().top; //獲取導覽變色的位置距頂部的高度
    var scrollTop = $(window).scrollTop(); //獲取當前窗口距頂部的高度
    if (scrollTop <= top) {
      $('.navbar-default').css('background', 'transparent');
    } else {
      $('.navbar-default').css('background', 'linear-gradient(to bottom, #5c1c13 1%, #8d2a1d)');
    }
  });


  $('.navbar-toggler').click(function () {
    if ($('.navbar-toggler').hasClass('active')) {
      $('.navbar-toggler').removeClass('active');
      // $('.navbar-default').css('background', 'transparent');
    } else {
      $('.navbar-toggler').addClass('active');
      $('.navbar-default').css('background', 'linear-gradient(to bottom, #5c1c13 1%, #8d2a1d)');
    }
  });

  $('.nav-item').click(function () {
    $('.navbar-toggler').removeClass('active');
    $('.navbar-toggler').addClass('collapsed');
    $('.navbar-collapse').removeClass('show');
  });

  //nav調整

  var handler = function (hash) {
    var target = document.getElementById(hash.slice(1));
    if (!target) return;
    var targetOffset = $(target).offset().top - 59;
    $('html,body').animate({ scrollTop: targetOffset }, 700);
  };

  $('.navbar-nav a[href^=#][href!=#]').click(function () {
    handler(this.hash);
  });

  $('.next a[href^=#][href!=#]').click(function () {
    handler(this.hash);
  });

  if (location.hash) {
    handler(location.hash);
  }

  $('.promotions-list').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  
});
