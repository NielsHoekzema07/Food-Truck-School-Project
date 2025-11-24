$(document).ready(function () {
    function toggleMenuVisibility() {
        if ($(window).width() <= 768) {
            $('#menu').hide(); 
        } else {
            $('#menu').show();
        }
    }

    toggleMenuVisibility(); 

    $(window).on('resize', function () {
        toggleMenuVisibility();
    });
    
    $('#menu-btn').on('click', function () {
        if (!$('#menu').is(':animated')) {
            $('#menu').slideToggle(500, function () {});
        }
    });
});