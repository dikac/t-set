import Timeout = NodeJS.Timeout;

export default class TimeToLive<Type> extends Set<Type> {

    private timeouts : Map<Type, Timeout> = new Map<Type, Timeout>();

    /**
     * @param milliseconds
     * time to live
     *
     * @param values
     */
    constructor(
        public milliseconds : number,
        values?: readonly Type[]
    ) {
        super(values);
    }

    get seconds() : number {

        return this.milliseconds / 1000;
    }

    set seconds(second : number) {

        this.milliseconds = second * 1000;
    }

    add(value: Type): this {

        this.clearTimeout(value);

        const timeout = setTimeout(()=>{

            this.timeouts.delete(value);
            super.delete(value);

        }, this.milliseconds);

        this.timeouts.set(value, timeout);
        super.add(value);

        return this;
    }

    private clearTimeout(value: Type) : boolean {

        const timeout = this.timeouts.get(value);

        if(timeout) {

            clearTimeout(timeout);
            return true;
        }

        return false;
    }

    clear(): void {

        this.timeouts.forEach(value => clearTimeout(value));
        super.clear();
    }

    delete(value: Type): boolean {

        this.clearTimeout(value);
        this.timeouts.delete(value);
        return super.delete(value);
    }

}
