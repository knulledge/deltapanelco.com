function parseVal(str) {
    let res = str.match(/(-?[\d.]+)([a-z%]*)/);
    return {
        val: parseFloat(res[1]),
        unit: res[2]
    }
}

$(document).ready(function () {
    // Disable transition for 300ms.
    // Because of navbar width and margin problem on refresh.
    setTimeout(function () {
        $('.remove').remove();
    }, 300);
});
