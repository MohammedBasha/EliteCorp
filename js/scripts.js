$(function () {
    "use strict";

    // Set the Banner Height
    var winH = $(window).height(),
        upperH = $(".upper-bar").outerHeight(),
        navH = $(".navbar").outerHeight();

    $(".main-slider, .main-slider .carousel-item").height(winH - (upperH + navH));


    // Initialize the Featured Work Filter
    $(".featured-filter > *").click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        if($(this).data("class") === 'all') {
            $(".featured-image").css("opacity", 1);
        } else {
            $(".featured-image").css("opacity", .3);
            $($(this).data("class")).css("opacity", 1);
        }
    });
	
	// Set the Testimonials Inner Content Margin top
    $(".testimonials-slider .carousel-inner").css("margin-top", ($(".testimonials-slider").height() - $(".testimonials-slider .carousel-inner").height()) / 2);

});
