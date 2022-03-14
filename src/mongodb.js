const mongoose = require('mongoose')

var dbUrl = `mongodb://127.0.0.1:27017/test`

mongoose.connect(dbUrl, {useNewUrlParser:true} ,(err) => {
    if (err) {
        console.log('Mongoose connection error: ' + err.message)
    } else {
        console.log('数据库链接成功')
    }
})

mongoose
    .connection
    .on('disconnected', function () {
        console.log('Mongoose connection disconnected')
    })

module.exports = mongoose