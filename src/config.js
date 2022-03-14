module.exports = {
    port: 3000,
    filePath:'E:\\nginx-1.16.1\\html\\uploadFile\\',   //开发环境
    // filePath:'/usr/local/nginx/html/uploadFile/',   //正式环境
    fileUrl : "http://localhost/uploadFile/",          //开发环境
    // fileUrl : "http://47.97.201.201/uploadFile/",   //正式环境
    // 白名单
    whiteList:[
        "127.0.0.1:8848",
        "127.0.0.1:8080"
    ]
}