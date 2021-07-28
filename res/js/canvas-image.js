$('canvas[img]').each(function () {
    let ctx = this.getContext("2d");
    let img = new Image();

    let width = parseInt($(this).attr('width'));
    let height = parseInt($(this).attr('height'));

    let r = parseInt($(this).attr('r'));
    let g = parseInt($(this).attr('g'));
    let b = parseInt($(this).attr('b'));

    img.onload = function () {
        ctx.drawImage(
            img,
            0, 0, img.width, img.height,
            0, 0, width, height
        );

        let frame = ctx.getImageData(0, 0, width, height);

        for (let i = 0; i < frame.data.length; i += 4) {
            let red = frame.data[i + 0];
            let green = frame.data[i + 1];
            let blue = frame.data[i + 2];

            if (green >= g && red >= r && blue >= b)
                frame.data[i + 3] = 0;
        }

        ctx.putImageData(frame, 0, 0);
    };

    img.src = $(this).attr('img');
});
