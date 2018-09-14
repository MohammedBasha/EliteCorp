$(function () {
    "use strict";

    // Set the Banner Height
    var winH = $(window).height(),
        upperH = $(".upper-bar").outerHeight(),
        navH = $(".navbar").outerHeight();

    $(".main-slider, .carousel-item").height(winH - (upperH + navH));

});
