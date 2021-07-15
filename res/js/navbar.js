$(document).ready(function () {
    let $navbar = $('#navbar');
    let $content = $('#nav-content');
    let $center = $('#nav-center');
    let $side = $('.nav-side');

    let $expandHeight = $($navbar.attr('expand-height-target'));
    let expandHeight = parseFloat($navbar.attr('expand-height'));

    if ($expandHeight && !expandHeight)
        expandHeight = $expandHeight.height();

    let margin = parseVal($navbar.css('margin-top'));

    let expand = function () {
        $navbar.addClass('expand');
        $content.addClass('expand');

        $content.removeClass('col-6');
        $content.addClass('col-12');

        $center.removeClass('col-12');
        $center.addClass('col-6');

        $side.removeClass('col-0');
        $side.addClass('col-3');
    };

    let shrink = function () {
        $navbar.removeClass('expand');
        $content.removeClass('expand');

        $content.removeClass('col-12');
        $content.addClass('col-6');

        $center.removeClass('col-6');
        $center.addClass('col-12');

        $side.removeClass('col-3');
        $side.addClass('col-0');
    };

    let navScroll = function () {
        if ($(document).scrollTop() < margin.val / 1.5) {
            if ($(document).scrollTop() < 4) {
                $navbar.css({
                    marginTop: margin.val + margin.unit,
                    marginBottom: margin.val + margin.unit
                });
            }
        } else {
            $navbar.css({
                marginTop: (margin.val / 4) + margin.unit,
                marginBottom: (margin.val / 4) + margin.unit
            });
        }

        if (expandHeight) {
            if ($(document).scrollTop() > expandHeight) expand();
            else shrink();
        } else {
            expand();
        }
    };
    navScroll();

    $(document).scroll(function () {
        navScroll();
    });
});