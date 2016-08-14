$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling: false,
        menu: '#menu',
        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage'],
    });

    // 首页banner
    var mySwiper = new Swiper('#index_product', {
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

    // 团队详细左边
    var mySwiper2 = new Swiper('#teamdetail', {
        grabCursor: true,
        paginationClickable: true
    })

    var mySwiper3 = new Swiper('#teamproduct', {
        grabCursor: true,
        paginationClickable: true
    })

    var media1 = '<a class="media" href="http://static1.mtime.cn/20160720105244/flash/newvideoplayer.swf?vid=57460&autoplay=1&w=1000&h=563"></a>';
    $('.sliderimg').bind("click", function() {
        $('#myModal1').prepend(media1);
        $('.media').media({
            width: 600,
            height: 450
        });
    });
    var media2 = '<a class="media" href="http://static1.mtime.cn/20160720105244/flash/newvideoplayer.swf?vid=57460&autoplay=1&w=1000&h=563"></a>';
    $('.sliderimg2').bind("click", function() {
        $('#myModal1').prepend(media2);
        $('.media').media({
            width: 600,
            height: 450
        });
    });

    //产品详细介绍页面
    var mySwiper4 = new Swiper('#productdetail', {
        grabCursor: true,
        paginationClickable: true
    })
    var mySwiper5 = new Swiper('#productlist', {
        grabCursor: true,
        paginationClickable: true
    })

    var mySwiper5 = new Swiper('#productimglist',{
      scrollContainer: true,
      scrollbar: {
        container: '.swiper-scrollbar'
      }
    })

});
