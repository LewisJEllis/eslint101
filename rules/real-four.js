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
        "VariableDeclaration": function(node) {
            for (var i = 0; i < node.declarations.length; i++) {
              var name = node.declarations[i].id.name;
              if (name.length > 4) {
                context.report(node, '"' + name + '" is too long of a variable name!');
              }
            }
        }
    };
};
