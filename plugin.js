ImportPathHelpers.init(Plugin);

Plugin.registerCompiler({
	extensions: ["js"]
}, function () {
	return new JsCompiler();
});
