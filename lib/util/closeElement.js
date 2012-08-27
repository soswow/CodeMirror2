/**
 * Element-closer extension for CodeMirror.
 *
 * This extension adds a "closeElement" utility function that can be used with key bindings to 
 * insert a matching end element such as ", ' , {, [ (.  It can
 *
 *
 * 
 * @author Dimitar Spiroski 
 * Contributed under the same license terms as CodeMirror.
 */
(function() {
	/** Option that allows element closing behavior to be toggled.  Default is true. */
	CodeMirror.defaults['closeElementEnabled'] = true;
	

	CodeMirror.defineExtension("closeElement", function(cm, ch) {
		if (!cm.getOption('closeElementEnabled')) {
			throw CodeMirror.Pass;
		}
				
        var pos = cm.getCursor(),
            closingElement = getClosingElementFor(ch);
        
        cm.replaceRange(ch + closingElement, pos);
        cm.setCursor({line: pos.line, ch: pos.ch + 1}); // set cursor inbetween
		
    });
                               
	function getClosingElementFor(ch) {
		switch (ch){
        case "\"":
                return ch;
        case "'":
                return ch;
        case "{":
                return "}";
        case "[":
                return "]";
        case "(":
                return ")";
        }
	}
	
})();
