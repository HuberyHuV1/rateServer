const Koa = require('koa')
const koaBody = require('koa-body');
const cors = require('koa2-cors')
const config = require('./src/config')
// const router = require('./src/router')
//启动的时候连接一下mongodb，不需要use
const mongoose = require('./src/mongoose')
const rateModel = require('./src/mongoose/rateModel')
const dataModel = require('./src/mongoose/dataModel')
// 自定义中间件
// const whiteList = require('./src/middleware/whiteList')

const app = new Koa()
// app.use(whiteList());  //白名单放第一位
// app.use(koaBody({
//     formLimit:10000 * 1024 * 1024,   //JSON 数据体的大小限制,默认56k
//     textLimit:10000 * 1024 * 1024,   //限制表单请求体的大小,默认56k
//     jsonLimit:10000 * 1024 * 1024,   //限制 text body 的大小,默认56k
//     multipart: true,
//         formidable: {
//             maxFileSize: 2000 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
//         }
// }));
// app.use(xmlParse());
// app.use(cors());  //放到route前面,跨域
// app.use(router.routes());
// app.use(router.allowedMethods());

app.listen(config.port)
console.log('server start at port:', config.port)
console.log('mongoose ====== ');
rateModel.find({}, (err, doc) => {
    if (err) {
        console.log('xxxxxxx', err.message)
    } else {
        console.log('doc', doc)
    }
})