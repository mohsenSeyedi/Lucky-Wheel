$(document).ready(function () {
//------------------------------------------------------------------------------------------------------------

    function applyOverlay(color = '') {
        if ($('body > #landingsOverlay').length) {
            return;
        }

        let overlayClass = '';
        overlayClass += color !== '' ? 'overlay--' + color : 'overlay';

        $("body").append('<div id="landingsOverlay" class="' + overlayClass + '"></div>');

        $('body').css("overflow", "hidden");
        $('body').css("height", "auto");
    }

    function removeOverlay() {
        $("body > #landingsOverlay").remove();
        $('body').css("overflow", "auto");
        $('body').css("height", "auto");
    }

    $(document).on("click", 'body #landingsOverlay', function () {
        removeOverlay();
        removeOverlay();
        $('.gameModal > div').removeClass('gameModal--show');
    });

    window.applyOverlay = applyOverlay;
    window.removeOverlay = removeOverlay;
});


