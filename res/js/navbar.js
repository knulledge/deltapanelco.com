var $navbar = $('#navbar');

var $navContent = $('#nav-content');
var $navCenter = $('#nav-center');
var $navSide = $('.nav-side');

function navExpand() {
    $navbar.addClass('expand');
    $navContent.addClass('expand');

    $navContent.removeClass('col-6');
    $navContent.addClass('col-12');

    $navCenter.removeClass('col-12');
    $navCenter.addClass('col-6');

    $navSide.removeClass('col-0');
    $navSide.addClass('col-3');
}

function navShrink() {
    $navbar.removeClass('expand');
    $navContent.removeClass('expand');

    $navContent.removeClass('col-12');
    $navContent.addClass('col-6');

    $navCenter.removeClass('col-6');
    $navCenter.addClass('col-12');

    $navSide.removeClass('col-3');
    $navSide.addClass('col-0');
}

$(document).ready(function () {
    let $expandHeight = $($navbar.attr('expand-height-target'));
    let expandHeight = parseFloat($navbar.attr('expand-height'));

    if ($expandHeight && !expandHeight)
        expandHeight = $expandHeight.height();

    let locked = $navbar.attr('expand-locked');

    if (!locked) locked = false;
    else locked = (locked === 'true' || locked === '1');

    let margin = parseVal($navbar.css('margin-top'));


    let navScroll = function () {
        if (!locked) {
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
                if ($(document).scrollTop() > expandHeight) navExpand();
                else navShrink();
            } else {
                navExpand();
            }
        } else {
            if ($navbar.hasClass('expand')) navExpand();
            else navShrink();
        }

    };
    navScroll();

    $(document).scroll(function () {
        navScroll();
    });

    setInterval(function () {
        let $current = $('.nav-link.current');
        let rect = $current[0].getBoundingClientRect();

        $('.current-box').css({
            left: rect.left,
            width: $current.width()
                + parseVal($current.css('padding-right')).val
                + parseVal($current.css('padding-left')).val,
            height: $current.height()
                + parseVal($current.css('padding-top')).val
                + parseVal($current.css('padding-bottom')).val,
        });
    }, 16);

    let $currentLink = $('.nav-link.current');
    $('.navbar-nav .nav-link').hover(function () {
        $('.nav-link.current').removeClass('current');
        $(this).addClass('current');
    });

    $('.nav-center').hover(null, function (event) {
        $('.nav-link.current').removeClass('current');
        $currentLink.addClass('current');
        event.stopPropagation();
    });
});
