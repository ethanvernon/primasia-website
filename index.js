$(document).ready(function(){


	console.log('page loaded')

	$('.section-carousel').slick({
		"slidesToShow": 1, 
		"slidesToScroll": 1,
		dots: true,
		arrows: true
	});

	$(window).scroll(function() {
		//
	    //After scrolling 100px from the top...
	    if ( $(window).scrollTop() >=  $(window).height() ) {
	        $('.navbar.sticky-top').removeClass('navbar--style-transparent');
	        $('.navbar.sticky-top').addClass('bg-dark');
	    //Otherwise remove inline styles and thereby revert to original stying
	    } else {
	        $('.navbar.sticky-top').removeClass('bg-dark');
	        $('.navbar.sticky-top').addClass('navbar--style-transparent');
	    }
	});

	//hamburger from codepen
	var hamburger = $('.hamburger');

	hamburger.on('click', function() {
	  $(this).toggleClass('hamburger-active');
	  $(this).toggleClass('hamburger-not-active');
	});

});