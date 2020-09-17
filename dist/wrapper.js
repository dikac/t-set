export default class Wrapper {
    constructor(set) {
        this.setSet(set);
    }
    setSet(set) {
        this._set = set;
    }
    getSet() {
        return this._set;
    }
    [Symbol.iterator]() {
        return this._set[Symbol.iterator]();
    }
    entries() {
        return this._set.entries();
    }
    keys() {
        return this._set.keys();
    }
    forEach(callbackfn, thisArg) {
        this._set.forEach(callbackfn, thisArg);
    }
    values() {
        return this._set.values();
    }
    add(value) {
        this._set.add(value);
        return this;
    }
    clear() {
        this._set.clear();
    }
    delete(value) {
        return this._set.delete(value);
    }
    get [Symbol.toStringTag]() {
        return this._set[Symbol.toStringTag];
    }
    get size() {
        return this._set.size;
    }
    has(value) {
        return this._set.has(value);
    }
}
//# sourceMappingURL=wrapper.js.map