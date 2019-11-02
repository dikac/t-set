export default function FromString(source : string, delimiter : string|RegExp, target : null|Set<string> = null) : Set<string> {

    if(target === null) {

        target = new Set<string>();
    }

    for(let val of source.split(delimiter)) {

        if(val.length) {

            target.add(val);
        }
    }

    return target;
}