$(document).ready(function() {
    window.reqhref = 'http://139.196.237.72:3010';


    $('#fullpage').fullpage({
        autoScrolling: false,
        menu: '#menu',
        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage'],
    });

    // 首页banner
    $.ajax({
        type: "get",
        data: {
            limit: 0
        },
        url: "http://139.196.237.72:3010/api/v1/products",
        success: function(res) {
            if (res.data.length != 0) {
                var itemTemplate = $('#index_product_list').html();
                var html = res.data.map(function(item, index) {
                    return itemTemplate
                        .replace('{editid}', item.id)
                        .replace('{font}', item.introduction)
                        .replace('{imgs}', 'src="' + item.imgs.split(',')[0] + '"');
                }).join('');

                $("#index_product .swiper-wrapper").html(html);
                var mySwiper = new Swiper('#index_product', {
                    grabCursor: true,
                    paginationClickable: true
                });
            } else {
                $("#index_product .swiper-wrapper").html('');
            }
            $('.arrow-left').on('click', function(e) {
                e.preventDefault()
                mySwiper.swipePrev()
            })
            $('.arrow-right').on('click', function(e) {
                e.preventDefault()
                mySwiper.swipeNext()
            })
        },
        error: function(err) {
            //alert(JSON.stringify(err));
        }
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

    

    //产品详细介绍页面
    var mySwiper4 = new Swiper('#productdetail', {
        grabCursor: true,
        paginationClickable: true
    })

    var mySwiper5 = new Swiper('#productimglist', {
        scrollContainer: true,
        scrollbar: {
            container: '.swiper-scrollbar'
        }
    })

});
