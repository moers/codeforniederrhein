
$(document).ready(function() {

  $('body').addClass('loaded');

  $(function() {
    $('a[rel="lightbox"]').fluidbox();
  });

  function fixDiv() {
    var $div = $('#hashtag');
    var $p = $('#hashtag p');
    var top = $div.data('top');
    if ($(window).scrollTop() > top) {
      $div.css({
        position: 'fixed',
        top: 0
      });
      $p.css({
        'padding-top': 0,
        'font-size': '32px'
      });
    } else {
      $div.css({
        position: 'block',
        top: 'auto'
      });
      $p.css({
        'padding-top': '0.5em',
        'font-size': '48px'
      });
    }
  }

  $('#hashtag').data('top', $('#hashtag').offset().top); // set original position on load
  $(window).scroll(fixDiv);

});
