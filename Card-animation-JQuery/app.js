$('.card').hover(function() {
    if ($(this).hasClass('active')) {
      $(this).find('.card-footer').slideUp(function() {
        $(this).closest('.card').removeClass('active');
      });
    } else {
      $(this).addClass('active');
      $(this).find('.card-footer').stop().slideDown();
    }
  });