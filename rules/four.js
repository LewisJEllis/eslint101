/**
 * @fileoverview Variable names should be short and sweet.
 * @author Lewis Ellis
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    return {
        "Identifier": function(node) {
            var name = node.name;

            if (name.length > 4) {
                context.report(node, '"' + name + '" is too long of a variable name!');
            }
        }
    };
};
