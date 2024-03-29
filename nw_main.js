/**
 *
 * @description Initialize
 *
 * @version 2018/10/03 初始版本。
 *
 * @author ace
 * 
 * @see {@link http://nwjs.io/|NW.js}
 * @see {@link https://github.com/nwjs/nw.js|nwjs/nw.js: Call all Node.js modules directly from DOM/WebWorker and enable a new way of writing applications with all Web technologies.}
 * @see {@link http://docs.nwjs.io/|NW.js Documentation}
 * @see {@link http://docs.nwjs.io/en/latest/For%20Users/Migration/From%200.12%20to%200.13/|From 0.12 to 0.13 - NW.js Documentation}
 *
 * @see {@link https://github.com/nwjs/nw.js/wiki|Home · nwjs/nw.js Wiki}
 * @see {@link https://github.com/nwjs/nw.js/wiki/Manifest-format|Manifest format · nwjs/nw.js Wiki}
 * @see {@link https://github.com/nwjs/nw.js/wiki/window|Window · nwjs/nw.js Wiki}
 * @see {@link https://github.com/nwjs/nw.js/wiki/Handling-files-and-arguments|Handling files and arguments · nwjs/nw.js Wiki}
 * @see {@link https://github.com/nwjs/nw.js/wiki/Differences-of-JavaScript-contexts|Differences of JavaScript contexts · nwjs/nw.js Wiki}
 * @see {@link https://github.com/nwjs/nw.js/wiki/Using-Node-modules|Using Node modules · nwjs/nw.js Wiki}
 * @see {@link https://github.com/nwjs/nw.js/wiki/Changes-related-to-node|Changes related to node · nwjs/nw.js Wiki}
 * @see {@link https://github.com/nwjs/nw.js/wiki/About-Node.js-server-side-script-in-nw.js|About Node.js server side script in nw.js · nwjs/nw.js Wiki}
 * @see {@link https://github.com/nwjs/nw.js/wiki/faq-name-conflict|Faq name conflict · nwjs/nw.js Wiki}
 *
 * @see {@link https://github.com/nwjs/nw.js/issues/4516|nwjs: v0.13.0-rc1: "AssertionError: path must be string" when importing requirejs · Issue #4516 · nwjs/nw.js}
 * @see {@link https://github.com/nwjs/nw.js/issues/4656|inject-js-end not working in nwjs 50.0.2661.49 · Issue #4656 · nwjs/nw.js}
 * @see {@link https://www.packtpub.com/books/content/using-nodejs-dependencies-nwjs|Using Node.js dependencies in NW.js | PACKT Books}
 *
 */
 
var win = nw.Window.open('index.html', {

	// "toolbar": true,
	// "title": "Hello",
	// "icon": "icon/favicon.ico",
	"frame": true,
	"width": 800,
	"height": 600,
	"inject_js_start": "nw_inject_start.js",
	"inject_js_end": "nw_inject_end.js"
});