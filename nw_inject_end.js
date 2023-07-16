/**
 *
 * @description URI Encode/Decode
 *
 * @version 2018/10/01 初始版本。
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web|Web technology for developers | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API|Web APIs | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events|Event reference | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript|JavaScript | MDN}
 *
 * @see {@link http://requirejs.org/|RequireJS}
 *
 * @see {@link https://jquery.com/|jQuery}
 *
 * @see {@link https://getbootstrap.com/|Bootstrap · The most popular HTML, CSS, and JS library in the world.}
 *
 * @see {@link http://underscorejs.org/|Underscore.js}
 * @see {@link https://github.com/jashkenas/underscore|jashkenas/underscore: JavaScript's utility _ belt}
 *
 * @see {@link http://backbonejs.org/|Backbone.js}
 * @see {@link https://github.com/jashkenas/backbone|jashkenas/backbone: Give your JS App some Backbone with Models, Views, Collections, and Events}
 * @see {@link https://github.com/jashkenas/backbone/wiki/Tutorials%2C-blog-posts-and-example-sites|Tutorials, blog posts and example sites · jashkenas/backbone Wiki}
 *
 * @see {@link https://www.w3schools.com/jsref/jsref_escape.asp JavaScript escape() Function}
 * @see {@link https://www.w3schools.com/jsref/jsref_unescape.asp JavaScript unescape() Function}
 * @see {@link https://www.w3schools.com/jsref/jsref_encodeuri.asp JavaScript encodeURI() Function}
 * @see {@link https://www.w3schools.com/jsref/jsref_decodeuri.asp JavaScript decodeURI() Function}
 * @see {@link https://www.w3schools.com/jsref/jsref_encodeuricomponent.asp JavaScript encodeURIComponent() Function}
 * @see {@link https://www.w3schools.com/jsref/jsref_decodeuricomponent.asp JavaScript decodeURIComponent() Function}
 *
 * @version 2017/03/16 ace 套用btn-group-justified，讓Radio選項的寬度可以對齊。
 *
 * @author ace
 *
 */

Configuration.loadJS(Configuration.requirejsFile, function() {

	requirejs.config(tw.ace33022.RequireJSConfig);

	requirejs(["tw.ace33022.util.browser.CommonForm", "js-logger"], function(CommonForm, Logger) {

		jQuery(document).ready(function() {
		
			var txtSourceURIId = 'txtSourceURI' + Math.random().toString(36).substr(2, 6);
			var radCodeTypeId  = 'radCodeType' + Math.random().toString(36).substr(2, 6);
			var txtEscapeId = 'txtEscape' + Math.random().toString(36).substr(2, 6);
			var txtCodeURIId = 'txtCodeURI' + Math.random().toString(36).substr(2, 6);
			var txtCodeURIComponentId = 'txtCodeURIComponent' + Math.random().toString(36).substr(2, 6);
			var btnCodeId = 'btnCode' + Math.random().toString(36).substr(2, 6);
			
			var tag;

			if ((location.protocol == 'http:') || (location.protocol == 'https:')) {
			
				tag = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>'
						+ '<!-- URI Encode/Decode -->'
						+ '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2244483882494685" data-ad-slot="1775165396" data-ad-format="auto" data-full-width-responsive="true"></ins>'
						+ '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
				jQuery('body').append(tag);
			}

			tag = '<div class="container-fluid col-sm-offset-2" style="padding-top: 50px;">'
					+ '  <div class="row">'
					+ '    <div class="col-sm-8">'
					+ '      <div class="form-group">'
					+ '        <textarea class="form-control" id="' + txtSourceURIId + '"></textarea>'
					+ '      </div>'
					+ '    </div>'
					+ '  </div>'

					+ '  <div class="row">'
					+ '    <div class="col-sm-offset-2 col-sm-4">'
					+ '      <div class="btn-group btn-group-justified" data-toggle="buttons" id="' + radCodeTypeId + '">'
					+ '        <label class="btn btn-primary active">'
					+ '          <input type="radio" name="' + radCodeTypeId + '" autocomplete="off" value="encode" checked="checked">Encode'
					+ '        </label>'
					+ '        <label class="btn btn-primary">'
					+ '          <input type="radio" name="' + radCodeTypeId + '" autocomplete="off" value="decode">Decode'
					+ '        </label>'
					+ '      </div>'
					+ '    </div>'
					+ '  </div>'
				
					+ '  <br/>'
					
					+ '  <div class="row">'
					+ '    <div class="col-sm-4 col-sm-offset-2">'
					+ '      <button type="button" class="btn btn-primary form-control" id="' + btnCodeId + '">Encode/Decode</button>'
					+ '    </div>'
					+ '  </div>'
					
					+ '  <br/>'

					+ '  <div class="row">'
					+ '    <div class="col-sm-8">'
					+ '      <label>escape/unescape</label>'
					+ '    </div>'
					+ '  </div>'
				
					+ '  <div class="row">'
					+ '    <div class="col-sm-8">'
					+ '      <div class="form-group">'
					+ '        <textarea class="form-control" id="' + txtEscapeId + '"></textarea>'
					+ '      </div>'
					+ '    </div>'
					+ '  </div>'
				
					+ '  <div class="row">'
					+ '    <div class="col-sm-8">'
					+ '      <label>encodeURI/decodeURI</label>'
					+ '    </div>'
					+ '  </div>'
				
					+ '  <div class="row">'
					+ '    <div class="col-sm-8">'
					+ '      <div class="form-group">'
					+ '        <textarea class="form-control" id="' + txtCodeURIId + '"></textarea>'
					+ '      </div>'
					+ '    </div>'
					+ '  </div>'
				
					+ '  <div class="row">'
					+ '    <div class="col-sm-8">'
					+ '      <label>encodeURIComponent/decodeURIComponent</label>'
					+ '    </div>'
					+ '  </div>'
				
					+ '  <div class="row">'
					+ '    <div class="col-sm-8">'
					+ '      <div class="form-group">'
					+ '        <textarea class="form-control" id="' + txtCodeURIComponentId + '"></textarea>'
					+ '      </div>'
					+ '    </div>'
					+ '  </div>'
					
					+ '</div>';
			jQuery('body').append(tag);
		
			window.addEventListener('beforeunload', function(event) {

				var confirmationMessage = 'Abort playing video?';

				// event.returnValue = confirmationMessage;

				return confirmationMessage;
			});

			// 這個寫法只有在轉換瀏覽器的Tab時才有作用，轉換不同程式時則無用！？
			document.addEventListener('visibilitychange',

				function() {

					// if (!document.hidden) initInsertStatus(false);
					// console.log(document.visibilityState);
				},
				false
			);
			
			jQuery(window).on('focus', function(event) {

				if ((jQuery('.modal-open').length === 0) && (jQuery('.modal-backdrop').length === 0)) {
				
					jQuery('#' + txtSourceURIId).focus();
				}
			});

			jQuery(window).on('blur', function(event) {});
			
			jQuery('textarea').on('focus', function(event) { jQuery(this).select(); });

			jQuery('#' + btnCodeId).on('click', function(event) {
			
				var uriValue = jQuery('#' + txtSourceURIId).val();

				event.preventDefault();
				
				if (jQuery('#' + radCodeTypeId + ' input:radio:checked').val() == 'encode') {
				
					jQuery('#' + txtEscapeId).val(escape(uriValue));
					jQuery('#' + txtCodeURIId).val(encodeURI(uriValue));
					jQuery('#' + txtCodeURIComponentId).val(encodeURIComponent(uriValue));
				}
				else {
				
					jQuery('#' + txtEscapeId).val(unescape(uriValue));
					jQuery('#' + txtCodeURIId).val(decodeURI(uriValue));
					jQuery('#' + txtCodeURIComponentId).val(decodeURIComponent(uriValue));
				}
			});

			jQuery('#' + txtSourceURIId).focus();
		});
	});
});