export default function FromString(source, delimiter, target) {
    if (!target) {
        target = new Set();
    }
    for (let val of source.split(delimiter)) {
        if (val.length) {
            target.add(val);
        }
    }
    return target;
}
//# sourceMappingURL=from-string.js.map