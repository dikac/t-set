export default class Wrapper<T, Container extends Set<T> = Set<T>> implements Set<T> {
    private _set;
    constructor(set: Container);
    protected setSet(set: Container): void;
    protected getSet(): Container;
    [Symbol.iterator](): IterableIterator<T>;
    entries(): IterableIterator<[T, T]>;
    keys(): IterableIterator<T>;
    forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
    values(): IterableIterator<T>;
    add(value: T): this;
    clear(): void;
    delete(value: T): boolean;
    get [Symbol.toStringTag](): string;
    get size(): number;
    has(value: T): boolean;
}
