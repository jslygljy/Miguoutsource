$(document).ready(function() {
    window.reqhref = 'http://139.196.237.72:3010';


    $('#fullpage').fullpage({
        autoScrolling: false,
        menu: '#menu',
        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage'],
    });

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
