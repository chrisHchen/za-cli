var fs = require('fs')
var logger = require('./logger')

exports.write = function (obj) {
  var config = JSON.parse(fs.readFileSync('../config.json') || {})
  Object.assign(config, obj)
  fs.writeFile('../config.json', JSON.stringify(config), function(err) {
    if (err) logger.fatal(err)
    logger.success('config OK')
  })
}

exports.read = function () {
  try{
    return JSON.parse(fs.readFileSync('../config.json')) || {}
  }catch(err){
    logger.fatal(err)
  }
}

// {
//     "type": "gitlab",
//     "host": "",
//     "private_token": "xd5KXkjXWrkd44rWxqu4",
//     "owner": "template",
//     "name": "",
//     "checkout": "master"
// }
