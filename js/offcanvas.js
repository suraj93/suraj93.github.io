$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

$('#nav').on('activate.bs.scrollspy', function() {

    var ele = $(this).find('.active');

    if (ele.find('.yep').length>0) {
      $('.yep li').removeClass('hide');
    }
    else{
      $('.yep li').addClass('hide');
    }

  });