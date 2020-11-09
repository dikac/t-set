var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _milliseconds;
export default class RefreshInterval extends Set {
    constructor(milliseconds, callback, values) {
        super(values);
        this.callback = callback;
        _milliseconds.set(this, void 0);
        this.milliseconds = milliseconds;
    }
    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
        }
    }
    start() {
        this.stop();
        this.interval = setInterval(() => this.callback(this), __classPrivateFieldGet(this, _milliseconds));
    }
    get seconds() {
        return this.milliseconds / 1000;
    }
    set seconds(second) {
        this.milliseconds = second * 1000;
    }
    get milliseconds() {
        return __classPrivateFieldGet(this, _milliseconds);
    }
    set milliseconds(milliseconds) {
        this.stop();
        __classPrivateFieldSet(this, _milliseconds, milliseconds);
        this.start();
    }
}
_milliseconds = new WeakMap();
//# sourceMappingURL=refresh-interval.js.map