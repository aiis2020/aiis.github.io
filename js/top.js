jQuery(document).ready(function($) {
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function() {
    $(this).scrollTop() > offset
      ? $back_to_top.addClass('cd-is-visible')
      : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass('cd-fade-out');
    }
  });
  $('body').scrollspy({ target: '#page-nav-wrapper', offset: 300 });

  //smooth scroll to top
  $back_to_top.on('click', function(event) {
    event.preventDefault();
    $('body,html').animate(
      {
        scrollTop: 0
      },
      scroll_top_duration
    );
  });

  $(window).on('scroll resize load', function() {
    $('#page-nav-wrapper').removeClass('navbar-fixed-top');
    $('#page-nav-wrapper').removeClass('navbar-inverse');
    $('#page-nav-wrapper').removeClass('navbar-static-top');

    var scrollTop = $(this).scrollTop();
    var topDistance = $('.banner-agileits').offset().top;

    if (topDistance > scrollTop) {
      $('#page-nav-wrapper').addClass('navbar-inverse');
      $('#page-nav-wrapper').addClass('navbar-static-top');
    } else {
      $('#page-nav-wrapper').addClass('navbar-fixed-top');
    }
  });
});
