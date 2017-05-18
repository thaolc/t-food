$(function() {
  "use strict";

  //slider
  var owlSlider = $('.owl');
  owlSlider.each(function() {
    var $carousel = $(this);
    $carousel.owlCarousel({
      items: $carousel.attr('data-items'),
      itemsDesktop: [1199, $carousel.attr('data-itemsDesktop')],
      itemsDesktopSmall: [979, $carousel.attr('data-itemsDesktopSmall')],
      itemsTablet: [797, $carousel.attr('data-itemsTablet')],
      itemsMobile: [479, $carousel.attr('data-itemsMobile')],
      navigation: true,
      pagination: true
    });
  });

  //zoom image
  var imgRoom = $('.image-zoom');
  imgRoom.magnificPopup({
    type: 'image'
  });
  $(window).load(function() {
    $("#loading").fadeOut(500);
  });

  //menu
  function height_w() {
    $('.nav').css('max-height', $(window).height() - 70);
  }
  var menuNav = $('.navbar-toggle');
  menuNav.click(function() {
    height_w();
  });
  window.onresize = function() {
    height_w();
  };

  //contact form
  var submitContact = $('#submit_contact'),
    message = $('#msg');

  submitContact.on('click', function(e) {
    e.preventDefault();

    var $this = $(this);

    $.ajax({
      type: "POST",
      url: 'contact.php',
      dataType: 'json',
      cache: false,
      data: $('#contact-form').serialize(),
      success: function(data) {

        if (data.info !== 'error') {
          $this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
          message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
        } else {
          message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
        }
      }
    });
  });
});
