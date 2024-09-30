// ==navbar
function navMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');

    const navBtn = document.getElementById('navBtn');
    navBtn.classList.toggle('active');
    document.body.classList.toggle("overflow-hidden")
}

// slider one

$('.sliderOne').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1, 
    nextArrow: ".next",
    prevArrow: ".prev",
    variableWidth:true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
// Counter js code
var counted = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $(".count").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    counted = 1;
  }
});

$(document).ready(function() {
  $('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-bottom',
    infinite: true,
  });

  $('.slider-bottom').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-main',
    centerMode: true,
    focusOnSelect: true,
      infinite: true,
      variableWidth: true,
  });
});
