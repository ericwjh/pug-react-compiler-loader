var jade = require('jade-react-compiler')
  , path = require('path')
  , loaderUtils = require("loader-utils");

module.exports = function(source){
  
  var transform = "var React = require('react');\n";
  
  this.cacheable && this.cacheable();
  
  var filepath = loaderUtils.getRemainingRequest(this).replace(/^!/, "");
  var query = loaderUtils.parseQuery(this.query);
  
  return transform + "module.exports= " + jade.compile(source, {filename: filepath}).toString();
  
}