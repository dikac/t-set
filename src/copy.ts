export default function Copy<V>(source : Set<V>, destination : null|Set<V> = null) : Set<V> {

    if(destination === null) {

        destination = new Set<V>();
    }

    for(let value of source) {

        destination.add(value);
    }

    return destination;
}