
$(function() {
    
    // Show menu
    $("#toggle").click(function() {
        $(this).toggleClass("on");
        $("#menu").slideToggle();
    });

    // Hide arrow
    var windowHeight = window.innerHeight;
    var iconArrow = $('.icon-wrapper');

    $(window).scroll(function() {
        var iconDistance = iconArrow.offset().top;
        if (iconDistance > windowHeight) {
            iconArrow.stop(true).fadeOut();
        } else {
            iconArrow.stop(true).fadeIn();
        }
    });

    // Scrolling effect
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    
});