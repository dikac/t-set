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
    function Copy(source, destination) {
        for (let value of source) {
            destination.add(value);
        }
        return destination;
    }
    exports.default = Copy;
});
//# sourceMappingURL=copy.js.map