(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/boolean/object", "@dikac/t-object/property/boolean/exists", "@dikac/t-iterable/boolean/iterable", "@dikac/t-array/boolean/list", "@dikac/t-object/boolean/method"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_1 = require("@dikac/t-object/boolean/object");
    const exists_1 = require("@dikac/t-object/property/boolean/exists");
    const iterable_1 = require("@dikac/t-iterable/boolean/iterable");
    const list_1 = require("@dikac/t-array/boolean/list");
    const method_1 = require("@dikac/t-object/boolean/method");
    function Set(value) {
        if (!object_1.default(value)) {
            return false;
        }
        if (!iterable_1.default(value)) {
            return false;
        }
        if (!list_1.default(['entries', 'keys', 'forEach', 'values', 'add', 'clear', 'delete', 'has', 'toString'], (property) => method_1.default(value, property))) {
            return false;
        }
        if (!exists_1.default(value, 'size')) {
            return false;
        }
        return true;
    }
    exports.default = Set;
});
//# sourceMappingURL=set.js.map