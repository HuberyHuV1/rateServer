const Router = require('koa-router')
const router = new Router()

router.get('/get', api.get)
router.post('/post', api.post)
router.post('/uploadFile', api.uploadFile)
router.post('/uploadFiles', api.uploadFiles)
router.post('/uploadBase64', api.uploadBase64)

module.exports = router