export default class Segment extends Set<string> {
    readonly delimiter: string;
    constructor(delimiter: string, values?: string[]);
    add(value: string): this;
    delete(value: string): boolean;
}
