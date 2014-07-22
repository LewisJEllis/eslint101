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
        var source = context.getSource(node.test, 0, 4);
        if (!source.match(/ {\n/)) {
            context.report(node, "Found improperly formatted opening brace");
        }
    }

    return {
        IfStatement: checkOpeningBrace,
        WhileStatement: checkOpeningBrace,
        ForStatement: checkOpeningBrace,
        DoWhileStatement: checkOpeningBrace
    };
};
