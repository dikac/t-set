export default class TimeToLive extends Set {
    /**
     * @param milliseconds
     * time to live
     *
     * @param values
     */
    constructor(milliseconds, values) {
        super(values);
        this.milliseconds = milliseconds;
        this.timeouts = new Map();
    }
    get seconds() {
        return this.milliseconds / 1000;
    }
    set seconds(second) {
        this.milliseconds = second * 1000;
    }
    add(value) {
        this.clearTimeout(value);
        const timeout = setTimeout(() => {
            this.timeouts.delete(value);
            super.delete(value);
        }, this.milliseconds);
        this.timeouts.set(value, timeout);
        super.add(value);
        return this;
    }
    clearTimeout(value) {
        const timeout = this.timeouts.get(value);
        if (timeout) {
            clearTimeout(timeout);
            return true;
        }
        return false;
    }
    clear() {
        this.timeouts.forEach(value => clearTimeout(value));
        super.clear();
    }
    delete(value) {
        this.clearTimeout(value);
        this.timeouts.delete(value);
        return super.delete(value);
    }
}
//# sourceMappingURL=time-to-live.js.map