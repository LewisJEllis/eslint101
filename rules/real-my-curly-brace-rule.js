/**
 * @fileoverview Control flow statements should always use curly braces,
 * and opening braces should be preceeded by a space and followed by a newline.
 * @author Lewis Ellis
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    function checkOpeningBrace(node) {
        var space = context.getSource(node.test, 1);
        var curlyNewline = context.getSource(node).slice(0, 2);
        var source = space + curlyNewline;
        if (!source.match(/ {\n/)) {
            context.report(node, "Found improperly formatted opening brace");
        }
    }

    return {
        ObjectExpression: checkOpeningBrace,
        BlockStatement: checkOpeningBrace
    };
};
