import {setInterval} from "timers";
import Timeout = NodeJS.Timeout;


export default class TimeToLive<Type> implements Set<Type> {

    private map : Map<Type, number> = new Map<Type, number>();
    private interval ?: Timeout;
    private cleanupMilliseconds : number = 0;

    /**
     * @param milliseconds
     * time to live
     *
     * @param cleanupMilliseconds
     * automatic cleanup interval, set 0 to disable
     */
    constructor(
        public milliseconds : number,
        cleanupMilliseconds : number
    ) {
        this.cleanup = cleanupMilliseconds;
    }

    set cleanup(milliseconds : number) {

        if(this.interval) {

            clearInterval(this.interval);
        }

        if(milliseconds > 1) {

            this.cleanupMilliseconds = milliseconds;

            setInterval(()=>[...this], milliseconds);

        } else {

            this.cleanupMilliseconds = 0;
        }
    }

    get cleanup() : number {

        return this.cleanupMilliseconds;
    }

    get seconds() : number {

        return this.milliseconds / 1000;
    }

    set seconds(second : number) {

        this.milliseconds = second * 1000;
    }

    get [Symbol.toStringTag](): string {

        return this.map[Symbol.toStringTag];
    }

    get size () : number {

        return this.map.size;
    }

    * [Symbol.iterator](): IterableIterator<Type> {

        for(let [value] of this.map.entries()) {

            if(this.has(value)) {

                yield value
            }
        }
    }

    add(value: Type): this {

        this.map.set(value, new Date().getTime());
        return this;
    }

    clear(): void {

        this.map.clear();
    }

    delete(value: Type): boolean {

        return this.map.delete(value);
    }

    forEach(callbackfn: (value: Type, value2: Type, set: Set<Type>) => void, thisArg?: any): void {

        this.map.forEach(
            (value: number, key: Type, map: Map<Type, number>)=>callbackfn(key, key, this),
            thisArg
        )
    }

    has(value: Type): boolean {

        let val = this.map.get(value);

        if(val) {

            if(this.milliseconds >= (new Date().getTime() - val)) {

                return true;

            } else {

                this.map.delete(value);
            }
        }

        return false;
    }

    * entries(): IterableIterator<[Type, Type]> {

        for(let value of this) {

            if(this.has(value)) {

                yield [value, value]
            }
        }
    }

    * keys(): IterableIterator<Type> {

        yield * this;
    }

    * values(): IterableIterator<Type> {

        yield * this;
    }
}
