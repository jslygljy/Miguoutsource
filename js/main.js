$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling: false,
        menu: '#menu',
        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage'],
    });

    // 首页banner
    var mySwiper = new Swiper('.swiper-container', {
        grabCursor: true,
        paginationClickable: true
    })
    $('.arrow-left').on('click', function(e) {
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $('.arrow-right').on('click', function(e) {
        e.preventDefault()
        mySwiper.swipeNext()
    })


    /*------focus-------*/
    $(".device").hover(
        function() {
            $(".arrow-left").stop(false, true);
            $(".arrow-right").stop(false, true);
            $(".arrow-left").animate({
                left: 0
            }, {
                duration: 500
            });
            $(".arrow-right").animate({
                right: 0
            }, {
                duration: 500
            });
        },
        function() {
            $(".arrow-left").stop(false, true);
            $(".arrow-right").stop(false, true);
            $(".arrow-left").animate({
                left: -52
            }, {
                duration: 500
            });
            $(".arrow-right").animate({
                right: -52
            }, {
                duration: 500
            });
        }
    );
});
