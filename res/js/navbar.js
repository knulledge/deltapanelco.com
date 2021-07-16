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

    let timeoutWhite = null;
    let timeoutTransparent = null;

    let $currentLink = $('.nav-link.current');
    $('.navbar-nav .nav-link').hover(function () {
        $('.nav-link.current').removeClass('current');
        $(this).addClass('current');
    });

    $('.nav-center').hover(function (event) {
        clearTimeout(timeoutWhite);
        clearTimeout(timeoutTransparent);

        timeoutTransparent = setTimeout(function () {
            $('.navbar-nav .nav-link').css({
                backgroundColor: '#0000'
            });
        }, 60);

        setTimeout(function () {
            $('div.current-box').css({
                transition: 'left 350ms, width 350ms, opacity 0ms 350ms'
            });
        }, 0);

        event.stopPropagation();
    }, function (event) {
        clearTimeout(timeoutTransparent);

        $('.nav-link.current').removeClass('current');

        let transition = 300; // + 50
        $currentLink.addClass('current');

        if (!$('div.current-box').css('transition').includes('opacity'))
            transition = 0;

        timeoutWhite = setTimeout(function () {
            $('.navbar-nav .nav-link').css({
                backgroundColor: '#0000'
            });
            $currentLink.css({
                backgroundColor: '#ffff'
            });
        }, transition);

        setTimeout(function () {
            $('div.current-box').css({
                transition: ''
            });
        }, transition + 50);

        if (transition <= 0) setTimeout(function () {
            $('div.current-box').css({ transition: '' });
        }, 350);

        event.stopPropagation();
    });
});
