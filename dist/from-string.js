(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function FromString(source, delimiter, target = null) {
        if (target === null) {
            target = new Set();
        }
        for (let val of source.split(delimiter)) {
            if (val.length) {
                target.add(val);
            }
        }
        return target;
    }
    exports.default = FromString;
});
//# sourceMappingURL=from-string.js.map