document.getElementById('mobile-menu').addEventListener('click', function () {
  var navMenu = document.querySelector('.nav-links');
  navMenu.classList.toggle('show');
});

$(document).ready(function(){
    $('.sk-sub-sec-con').slick({
      // Slick Carousel settings/options
      autoplay: false,
      autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
      // Add more settings as needed
    });
    $('.edu-sub-sec-con').slick({
      // Slick Carousel settings/options
      autoplay: false,
      autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
      // Add more settings as needed
    });
    $('.pro-sub-sec-con').slick({
      // Slick Carousel settings/options
      autoplay: false,
      autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
      // Add more settings as needed
    });
  });
