module.exports = {
  website: {
    assets: "./book",
    js: [
      "client-tongji.js"
    ],
    html: {
      "head:end": function() {
        var config = this.options.pluginsConfig.tongji || {};

        if (!config.token) {
          throw "Need to option 'token' for Baidu Tongji plugin";
        }

        return "<script>"
        + " var _hmt = _hmt || [];"
        + " (function() {"
        + "   var hm = document.createElement('script');"
        + "   hm.src = '//hm.baidu.com/hm.js?" + config.token + "';"
        + "   var s = document.getElementsByTagName('script')[0]; "
        + "   s.parentNode.insertBefore(hm, s);"
        + " })();"
        + "</script>";
      }
    }
  },

  hooks: {
    "init": function() {
      console.log("install baidu-tongji plugin!");
    },

    "finish": function() {
      console.log("install baidu-tongji plugin finish!");
    }
  }
};
