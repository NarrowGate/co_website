$(function() {

  "use strict";

  var topoffset = 50; //variable for menu height

  //Activate Scrollspy
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });

  // add inbody class
  var hash = $(this).find('li.active a').attr('href');
  if(hash !== '#home') {
    $('header nav.radial').addClass('inbody');
  } else {
    $('header nav.radial').removeClass('inbody');
  }


  // Add an inbody class to nav when scrollspy event fires
  $('.navbar-fixed-bottom').on('activate.bs.scrollspy', function() {
    var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#home') {
      $('header nav.radial').addClass('inbody');
    } else {
      $('header nav.radial').removeClass('inbody');
    }
  });


  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

});


function smoothScroll() {
    var a = $(window);
    a.on("mousewheel DOMMouseScroll", function(b) {
        b.preventDefault();
        b = b.originalEvent.wheelDelta / 120 || -b.originalEvent.detail / 3;
        b = a.scrollTop() - parseInt(280 * b);
        TweenMax.to(a, 1.1, {
            scrollTo: {
                y: b,
                autoKill: !0
            },
            ease: Power1.easeOut,
            overwrite: 5
        })
    })
};
smoothScroll();