(function($) {
    "use strict";

     $(document).on('ready', function() {
		/*=======================
		  Extra Scroll JS
		=========================*/
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 0
				}, 900);
			e.preventDefault();
		});
		/*====================================
			Scroll Up JS
		======================================*/
		$.scrollUp({
			scrollText: '<span><i class="fa fa-angle-up"></i></span>',
			easingType: 'easeInOutExpo',
			scrollSpeed: 900,
			animation: 'fade'
		});

	});
	/*=====================================
	  Preloader JS
	======================================*/
	//After 2s preloader is fadeOut

	setTimeout(function() {
		$('.preloader').delay(2000).fadeOut('slow');

	/*====================================
		Flex Slider JS
		======================================*/
		$('.flexslider-thumbnails').flexslider({
			animation: "slide",
			controlNav: "thumbnails",
		});
	  $('.input-number').focusin(function() {
		$(this).data('oldValue', $(this).val());
	  });
	  $('.input-number').change(function() {

		var minValue = parseFloat($(this).attr('data-min'));
		var maxValue = parseFloat($(this).attr('data-max'));
		var valueCurrent = parseFloat($(this).val());

		name = $(this).attr('name');
		if (valueCurrent >= minValue) {
		  $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
		} else {
		  alert('Sorry, the minimum value was reached');
		  $(this).val($(this).data('oldValue'));
		}
		if (valueCurrent <= maxValue) {
		  $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
		} else {
		  alert('Sorry, the maximum value was reached');
		  $(this).val($(this).data('oldValue'));
		}


	  });
	//After 2s, the no-scroll class of the body will be removed
	   $('body').removeClass('no-scroll');
	}, 2000); //Here you can change preloader time

})(jQuery);
