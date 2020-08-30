(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/array/segment", "@dikac/t-string/boolean/segment"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const segment_1 = require("@dikac/t-string/array/segment");
    const segment_2 = require("@dikac/t-string/boolean/segment");
    class Segment extends Set {
        constructor(delimiter, values) {
            super();
            this.delimiter = delimiter;
            if (values) {
                values.map(value => this.add(value));
            }
        }
        add(value) {
            segment_1.default(value, this.delimiter).forEach((value) => {
                super.add(value);
            });
            return this;
        }
        delete(value) {
            let deleted = true;
            for (let data of this) {
                if (segment_2.default(value, data, this.delimiter)) {
                    deleted = true;
                    super.delete(data);
                }
            }
            return deleted;
        }
    }
    exports.default = Segment;
});
//# sourceMappingURL=segment.js.map