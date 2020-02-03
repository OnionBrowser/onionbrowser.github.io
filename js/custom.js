(function ($) {
    "use strict";

    $(document).ready(function () {
        /*$('#responsive-menu-button').sidr({
            name: 'sidr-main',
            source: '.main-nav-for-mobile',
            side: 'right'
        });*/

        $('#responsive-menu-button').on('click', function () {
            $('#sidr').addClass('appear');
        });

        $('#close-button').on('click', function () {
            $('#sidr').removeClass('appear');
        });

    });



})(jQuery);
