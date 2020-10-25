export default class TimeToLive<Type> implements Set<Type> {
    milliseconds: number;
    private map;
    private interval?;
    private cleanupMilliseconds;
    /**
     * @param milliseconds
     * time to live
     *
     * @param cleanupMilliseconds
     * automatic cleanup interval, set 0 to disable
     */
    constructor(milliseconds: number, cleanupMilliseconds: number);
    set cleanup(milliseconds: number);
    get cleanup(): number;
    get seconds(): number;
    set seconds(second: number);
    get [Symbol.toStringTag](): string;
    get size(): number;
    [Symbol.iterator](): IterableIterator<Type>;
    add(value: Type): this;
    clear(): void;
    delete(value: Type): boolean;
    forEach(callbackfn: (value: Type, value2: Type, set: Set<Type>) => void, thisArg?: any): void;
    has(value: Type): boolean;
    entries(): IterableIterator<[Type, Type]>;
    keys(): IterableIterator<Type>;
    values(): IterableIterator<Type>;
}
