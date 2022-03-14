// utils/logger.js 

const log4js = require('log4js'); 
const path = require('path') 
// 定义log config 
log4js.configure({ 
  appenders: { 
     // 定义两个输出源 
     info: { type: 'file', filename: path.resolve('log/info.log') }, 
     error: { type: 'file', filename: path.resolve('log/error.log') } 
  }, 
  categories: { 
     // 为info/warn/debug 类型log调用info输出源 error/fatal 调用error输出源 
     default: { appenders: ['info'], level: 'info' }, 
     info: { appenders: ['info'], level: 'info' }, 
     warn: { appenders: ['info'], level: 'warn' }, 
     debug: { appenders: ['info'], level: 'debug' }, 
     error: { appenders: ['error'], level: 'error' }, 
     fatal: { appenders: ['error'], level: 'fatal' }, 
  } 
}); 
// 导出5种类型的 logger 
module.exports = { 
   debug: (...params) => log4js.getLogger('debug').debug(...params), 
   info: (...params) => log4js.getLogger('info').info(...params), 
   warn: (...params) => log4js.getLogger('warn').warn(...params), 
   error: (...params) => log4js.getLogger('error').error(...params), 
   fatal: (...params) => log4js.getLogger('fatal').fatal(...params), 
} 

//  使用
const logger = require('./utils/logger.js')
//  记录访问，可以自己写一个中间件
logger.info('请求url:', url , method||'get', JSON.stringify(data))