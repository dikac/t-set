import Segments from "@dikac/t-string/array/segment";
import SegmentString from "@dikac/t-string/boolean/segment";
export default class Segment extends Set {
    constructor(delimiter, values) {
        super();
        this.delimiter = delimiter;
        if (values) {
            values.map(value => this.add(value));
        }
    }
    add(value) {
        Segments(value, this.delimiter).forEach((value) => {
            super.add(value);
        });
        return this;
    }
    delete(value) {
        let deleted = true;
        for (let data of this) {
            if (SegmentString(value, data, this.delimiter)) {
                deleted = true;
                super.delete(data);
            }
        }
        return deleted;
    }
}
//# sourceMappingURL=segment.js.map