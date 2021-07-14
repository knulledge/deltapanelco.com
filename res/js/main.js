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
        if ($(this).scrollTop() < margin.val / 1.5) {
            if ($(this).scrollTop() < 4) {
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

        if ($(this).scrollTop() > $('#main-banner').height()) {
            $('#navbar, #nav-content').addClass('expand');
            $('.nav-side').addClass('padding');
        } else {
            $('#navbar, #nav-content').removeClass('expand');
            if ($('.nav-side').hasClass('padding')) {
                setTimeout(function () {
                    $('.nav-side').removeClass('padding');
                }, 100);
            }
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
