(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.materialboxed').materialbox();
    $('select').formSelect();
   $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
