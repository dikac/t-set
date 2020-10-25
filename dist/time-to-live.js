import { setInterval } from "timers";
export default class TimeToLive {
    /**
     * @param milliseconds
     * time to live
     *
     * @param cleanupMilliseconds
     * automatic cleanup interval, set 0 to disable
     */
    constructor(milliseconds, cleanupMilliseconds) {
        this.milliseconds = milliseconds;
        this.map = new Map();
        this.cleanupMilliseconds = 0;
        this.cleanup = cleanupMilliseconds;
    }
    set cleanup(milliseconds) {
        if (this.interval) {
            clearInterval(this.interval);
        }
        if (milliseconds > 1) {
            this.cleanupMilliseconds = milliseconds;
            setInterval(() => [...this], milliseconds);
        }
        else {
            this.cleanupMilliseconds = 0;
        }
    }
    get cleanup() {
        return this.cleanupMilliseconds;
    }
    get seconds() {
        return this.milliseconds / 1000;
    }
    set seconds(second) {
        this.milliseconds = second * 1000;
    }
    get [Symbol.toStringTag]() {
        return this.map[Symbol.toStringTag];
    }
    get size() {
        return this.map.size;
    }
    *[Symbol.iterator]() {
        for (let [value] of this.map.entries()) {
            if (this.has(value)) {
                yield value;
            }
        }
    }
    add(value) {
        this.map.set(value, new Date().getTime());
        return this;
    }
    clear() {
        this.map.clear();
    }
    delete(value) {
        return this.map.delete(value);
    }
    forEach(callbackfn, thisArg) {
        this.map.forEach((value, key, map) => callbackfn(key, key, this), thisArg);
    }
    has(value) {
        let val = this.map.get(value);
        if (val) {
            if (this.milliseconds >= (new Date().getTime() - val)) {
                return true;
            }
            else {
                this.map.delete(value);
            }
        }
        return false;
    }
    *entries() {
        for (let value of this) {
            if (this.has(value)) {
                yield [value, value];
            }
        }
    }
    *keys() {
        yield* this;
    }
    *values() {
        yield* this;
    }
}
//# sourceMappingURL=time-to-live.js.map