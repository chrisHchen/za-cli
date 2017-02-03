var fs = require('fs')
var logger = require('./logger')
var path = require('path')

var conf_path = path.join(__dirname, '../config.json')

exports.write = function (obj) {
  var config = JSON.parse(fs.readFileSync(conf_path) || {})
  Object.assign(config, obj)

  fs.writeFile(conf_path, JSON.stringify(config), function(err) {
    if (err) logger.fatal(err)
    logger.success('config OK')
  })
}

exports.read = function () {
  try{
    return JSON.parse(fs.readFileSync(conf_path)) || {}
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
