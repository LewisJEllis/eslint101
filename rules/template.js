/**
 * @fileoverview Describe rule here
 * @author Lewis Ellis
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    return {
        "SomeNodeType": function(node) {
            // Do some stuff to check for our rule

            context.report(node, 'This rule was broken!');
        }
    };
};
