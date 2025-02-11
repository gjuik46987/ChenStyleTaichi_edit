(function ($) {
    $.UrlParam = function (name) {
      //宣告正規表達式
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      /*
       * window.location.search 獲取URL ?之後的參數(包含問號)
       * substr(1) 獲取第一個字以後的字串(就是去除掉?號)
       * match(reg) 用正規表達式檢查是否符合要查詢的參數
      */
      var r = window.location.search.substr(1).match(reg);
      //如果取出的參數存在則取出參數的值否則回穿null
      if (r != null) return unescape(r[2]); return null;
    }
  })(jQuery);