const upload = require('../util/upload')

exports.get  = async (ctx, next) => {
    get方式的取query的值
    let query = ctx.request.query;
    await next();
    ctx.body = query;  //返回值
}
exports.post  = async (ctx, next) => {
    //post取body的值
    let body = ctx.request.body;  
    await next();
    ctx.body = body;  //返回值
}
exports.uploadFile  = async (ctx, next) => {
    let body = ctx.request.body;
    var res = await upload.uploadFile(ctx)
    await next();
    ctx.body = {file:res};  //返回值
}
exports.uploadBase64  = async (ctx, next) => {
    let body = ctx.request.body;
    var res = await upload.uploadBase64(body.file,body.fileName)
    await next();
    ctx.body = {file:res};  //返回值
}