export default class RefreshInterval<Type> extends Set<Type> {
    #private;
    callback: (set: Set<Type>) => void;
    private interval;
    constructor(milliseconds: number, callback: (set: Set<Type>) => void, values?: readonly Type[]);
    get seconds(): number;
    set seconds(second: number);
    get milliseconds(): number;
    set milliseconds(milliseconds: number);
}
