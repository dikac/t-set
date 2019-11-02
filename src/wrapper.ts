
export default class Wrapper <T, Container extends Set<T> = Set<T>> implements Set<T> {

    private _set !: Container;

    constructor(set: Container)
    {
        this.setSet(set);
    }

    protected setSet (set : Container) {

        this._set = set;
    }

    protected getSet () : Container {

        return this._set;
    }

    [Symbol.iterator](): IterableIterator<T>
    {
        return this._set[Symbol.iterator]();
    }

    entries(): IterableIterator<[T, T]>
    {
        return this._set.entries();
    }

    keys(): IterableIterator<T>
    {
        return this._set.keys();
    }

    forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void
    {
        this._set.forEach(callbackfn, thisArg);
    }

    values(): IterableIterator<T>
    {
        return this._set.values();
    }

    add(value: T) : this
    {
        this._set.add(value);
        return this;
    }

    clear(): void
    {
        this._set.clear();
    }

    delete(value: T): boolean
    {
        return this._set.delete(value);
    }

    get [Symbol.toStringTag](): string
    {
        return this._set[Symbol.toStringTag];
    }

    get size(): number
    {
        return this._set.size;
    }

    has(value: T): boolean
    {
        return this._set.has(value);
    }
}

