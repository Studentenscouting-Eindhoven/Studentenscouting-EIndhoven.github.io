function moveScroller() {
    var $anchor = $("#Slideshow");
    var $scroller = $('#Header');

    var move = function() {
        var st = $(window).scrollTop();
        var ot = $anchor.offset().top;
        if(st > ot) {
            $scroller.css({
                position: "fixed",
                top: "0px"
            });
        } else {
            $scroller.css({
                position: "relative",
                top: "6vw"
            });
        }
    };
    $(window).scroll(move);
    move();
}