export default function Copy<V>(
    source : Set<V>,
    destination : Set<V>
) : Set<V> {

    for(let value of source) {

        destination.add(value);
    }

    return destination;
}
