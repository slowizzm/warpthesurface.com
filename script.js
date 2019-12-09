// Show top nav bar which page is active
pageName = $('.page_name').val();
$('#' + pageName).addClass('active_nav');

// hover effect on the project squares
$('.project_square_background').hover(function() {
  $(this).find('img').fadeTo(200, 0.5);
  $(this).find('p').fadeTo(200, 1);
}, function() {
  $(this).find('img').fadeTo(200, 1);
  $(this).find('p').fadeTo(200, 0);
});