var fs = require('fs')
var readFileSync = fs.readFileSync
var readFile = fs.readFile
var brontoDefinition = require('./bronto-soap-definition')

//override/extend function
fs.readFileSync = function(fn) {
  var str = ''
  //check if it's the file soap module is looking for
  if (fn) {
    if (fn.indexOf('wsse-security-header.ejs') !== -1) {
      //this can be cleaned up / moved to another file. This is found in the soap node module
      //inside of a templates folder https://github.com/vpulim/node-soap/blob/master/lib/security/templates/wsse-security-header.ejs
      str =
        '<wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"\r\n               xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"\r\n               soap:mustUnderstand="true">\r\n\t<wsse:BinarySecurityToken   \r\n               EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" \r\n               ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3"\r\n               wsu:Id="<%-id%>"><%-binaryToken%></wsse:BinarySecurityToken>\r\n    <Timestamp xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" Id="_1"> \r\n    \t<Created><%-created%></Created>\r\n    \t<Expires><%-expires%></Expires>\r\n    </Timestamp>\r\n</wsse:Security>'
      return Buffer.from(str)
    }
    if (fn.indexOf('wsse-security-token.ejs') !== -1) {
      str =
        '<wsse:SecurityTokenReference>\r\n    <wsse:Reference URI="<%-x509Id%>" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3"/>\r\n</wsse:SecurityTokenReference>\r\n'
      return Buffer.from(str)
    }
    if (fn.indexOf('./bronto-soap-definition') !== -1) {
      str = brontoDefinition
      return Buffer.from(str)
    }
  }
  //if not soap, return original
  return readFileSync.apply(this, [].slice.call(arguments))
}

fs.readFile = function(path, encoding, cb) {
  console.log(path, cb)
  if (path.indexOf('bronto-soap-definition') !== -1) {
    cb(null, brontoDefinition)
    return
  }
  return readFile.apply(this, Array.prototype.slice.call(arguments))
}

// re-export the module for changes to take effect
module.exports = fs
