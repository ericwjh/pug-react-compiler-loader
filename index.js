var pug = require('pug-react-compiler'),
	loaderUtils = require("loader-utils");

module.exports = function(source) {

	var transform = "var React = require('react');\n";

	this.cacheable && this.cacheable();

	var filepath = loaderUtils.getRemainingRequest(this).replace(/^!/, "");
	var query = loaderUtils.parseQuery(this.query);
	return transform + pug.compileClient(source, {
		filename: filepath,
		pretty: true
	});
}