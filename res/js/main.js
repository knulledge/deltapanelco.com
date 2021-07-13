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

    $(document).scroll(function () {
        if ($(this).scrollTop() < margin.val / 1.5) {
            if ($(this).scrollTop() < 4) {
                $navbar.css({
                    marginTop: margin.val + margin.unit,
                    marginBottom: margin.val + margin.unit
                });
            }
        }
        else {
            $navbar.css({
                marginTop: (margin.val / 4) + margin.unit,
                marginBottom: (margin.val / 4) + margin.unit
            });
        }
    });
});
