(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/boolean/type", "@dikac/t-object/boolean/symbol-to-string", "@dikac/t-object/boolean/symbol-iterator", "@dikac/t-object/boolean/methods", "@dikac/t-object/boolean/properties"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("@dikac/t-object/boolean/type");
    const symbol_to_string_1 = require("@dikac/t-object/boolean/symbol-to-string");
    const symbol_iterator_1 = require("@dikac/t-object/boolean/symbol-iterator");
    const methods_1 = require("@dikac/t-object/boolean/methods");
    const properties_1 = require("@dikac/t-object/boolean/properties");
    function Type(value) {
        if (!type_1.default(value)) {
            return false;
        }
        if (!symbol_to_string_1.default(value)) {
            return false;
        }
        if (!symbol_iterator_1.default(value)) {
            return false;
        }
        if (!methods_1.default(value, 'entries', 'keys', 'forEach', 'values', 'add', 'clear', 'delete', 'has')) {
            return false;
        }
        if (!properties_1.default(value, 'size')) {
            return false;
        }
        return true;
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map