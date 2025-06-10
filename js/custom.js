

$('.seven-section .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        640:{
            items:2
        },
        1024:{
            items:3
        }
    }
})

$('.tab-links li:first-child').addClass('active');
$('.four-section').hide();
$('.four-section:first').show();

// Click function
$('.tab-links li').click(function(){
  $('.tab-links li').removeClass('active');
  $(this).addClass('active');
  $('.four-section').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

/* jQuery
================================================== */
$(function() {
  $('.acc__title').click(function(j) {
    
    var dropDown = $(this).closest('.acordian-row').find('.acordian-content');
    $(this).closest('.acordian').find('.acordian-content').not(dropDown).slideUp();
    
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.acordian').find('.accordian-title.active').removeClass('active');
      $(this).addClass('active');
    }
    
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});
  

    

jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
       var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
            }
    });

    };
  
  // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});



//menu


new Mmenu(document.querySelector("nav#menu"));

            document.addEventListener("click", function (evnt) {
                var anchor = evnt.target.closest('a[href="#/"]');
                if (anchor) {
                    evnt.preventDefault();
                }
            });


            ///////////