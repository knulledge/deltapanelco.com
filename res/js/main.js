function parseVal(str) {
    let res = str.match(/(-?[\d.]+)([a-z%]*)/);
    return {
        val: parseFloat(res[1]),
        unit: res[2]
    }
}

$(function () {
    let $navbar = $('#navbar');
    let margin = parseVal($navbar.css('margin-top'));

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

        if ($(document).scrollTop() > $('#main-banner').height()) { //? Expanded
            $('#navbar, #nav-content').addClass('expand');

            $('#nav-content').removeClass('col-6');
            $('#nav-content').addClass('col-12');

            $('#nav-center').removeClass('col-12');
            $('#nav-center').addClass('col-6');

            $('.nav-side').removeClass('col-0');
            $('.nav-side').addClass('col-3');
        } else { //? Shrinked
            $('#navbar, #nav-content').removeClass('expand');

            $('#nav-content').removeClass('col-12');
            $('#nav-content').addClass('col-6');

            $('#nav-center').removeClass('col-6');
            $('#nav-center').addClass('col-12');

            $('.nav-side').removeClass('col-3');
            $('.nav-side').addClass('col-0');
        }
    };
    navScroll();

    $(document).scroll(function () {
        navScroll();
    });

    // Disable transition for 300ms.
    // Because of navbar width and margin problem on refresh.
    setTimeout(function () {
        $('.remove').remove();
    }, 300);
});
