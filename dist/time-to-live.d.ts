export default class TimeToLive<Type> extends Set<Type> {
    milliseconds: number;
    private timeouts;
    /**
     * @param milliseconds
     * time to live
     *
     * @param values
     */
    constructor(milliseconds: number, values?: readonly Type[]);
    get seconds(): number;
    set seconds(second: number);
    add(value: Type): this;
    private clearTimeout;
    clear(): void;
    delete(value: Type): boolean;
}
