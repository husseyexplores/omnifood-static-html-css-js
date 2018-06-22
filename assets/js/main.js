(function(d, s, id){
   var js, firstElem;
   firstElem = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s);
   js.id = id;
   js.src = '//connect.facebook.net/en_US/messenger.Extensions.js';
   firstElem.parentNode.insertBefore(js, firstElem); 
}(document, 'script', "MessengerID"));

$(document).ready(function() {
   
   /*
   var waypoints = $('#handler-first').waypoint(function(direction) {
      notify(this.element.id + ' hit 25% from top of window') 
    }, {
      offset: '25%'
    })
   */ 

   // Sticky Navigation
   $('.js--section-features').waypoint(function(direction) {
      if(direction === 'down') {
         $('nav').addClass('sticky');
      } else {
         $('nav').removeClass('sticky')
      }
   }, {
      offset: '60px'
   });

   // Scroll on Burrons
   $('.js--scroll-to-plans').click(function() {
      $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
   });

   $('.js--scroll-to-start').click(function() {
      $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
   });

   // Navigation scroll
   $('a[href*=\\#]:not([href=\\#])').click(function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if(target.length) {
            $('html, body').animate({
               scrollTop: target.offset().top
            }, 1000);
            return false;
         }
      }
   });

   // Animations on scroll - Animate css
   $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated fadeIn');
   }, {
      offset: '50%'
   });

   $('.js--wp-2').waypoint(function(direction) {
      $('.js--wp-2').addClass('animated fadeInUp');
   }, {
      offset: '50%'
   });

   $('.js--wp-3').waypoint(function(direction) {
      $('.js--wp-3').addClass('animated fadeIn');
   }, {
      offset: '50%'
   });

   $('.js--wp-4').waypoint(function(direction) {
      $('.js--wp-4').addClass('animated pulse');
   }, {
      offset: '50%'
   });

   // Mobile Nav
   $('.js--mobile-nav-icon').click(function() {
      var nav = $('.js--main-nav-list');
      var icon = $('.js--mobile-nav-icon ion-icon');

      nav.slideToggle(200);

      if (icon[0].attributes.name.value === 'ios-menu') {
         icon[0].attributes.name.value = 'ios-close';
      } else if (icon[0].attributes.name.value === 'ios-close') {
         icon[0].attributes.name.value = 'ios-menu';
      }


   });

   // Contact form Map
   var map = new GMaps({
      div: '.map',
      lat: 38.7436266,
      lng: -9.06,
      zoom: 12
   });
   map.addMarker({
      lat: 38.7436266,
      lng: -9.1602037,
      title: 'Lisbon',
      infoWindow: {
         content: '<p>Our Lisbon HQ</p>'
      }
   });


});