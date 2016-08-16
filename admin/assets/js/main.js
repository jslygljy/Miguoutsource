function getid(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var param = window.location.search.substring(1).match(reg);
    if (param !== null) {
        return param[2];
    } else {
        return undefined;
    }
}
$(document).ready(function() {

    /**
     * 本地存储操作封装
     **/

    window.Storage = {
        //设置存储对象
        setItem: function(key, val) {
            //保存时，添加时间戳
            val.timestamp = new Date().getTime();
            sessionStorage.setItem(key, JSON.stringify(val));
        },
        //获取token
        getItem: function(key) {
            var _result = JSON.parse(sessionStorage.getItem(key));
            return _result ? _result : false;
        },
        removeItem: function(key) {
            sessionStorage.removeItem(key);
        }
    };
    if (!window.Storage.getItem('user') && !window.Storage.getItem('pwd')) {
        window.location.href = "login.html";
    };
    $.ajax({
        type: "post",
        //timeout: 2000,
        async: false,
        contentType: "text/json",
        url: "left.html",
        jsonp: 'callback',
        success: function(res) {
            $("#wrap").before(res);
        },
        error: function(err) {
            //alert(JSON.stringify(err));
        }
    });

    $("#accordion2 .accordion-group .accordion-heading").click(function() {
        $("#accordion2 .accordion-group .accordion-heading a").removeClass("active");
        $(this).find('a').addClass("active")
    })
});
