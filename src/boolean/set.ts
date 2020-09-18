import TypeObject from "@dikac/t-object/boolean/object";
import Properties from "@dikac/t-object/property/boolean/exists";
import Iterable from "@dikac/t-iterable/boolean/iterable";
import List from "@dikac/t-array/boolean/list";
import Method from "@dikac/t-object/boolean/method";

export default function Set(value : object) : value is Set<unknown> {

    if(!TypeObject(value)) {

        return false;
    }


    if(!Iterable(value)) {

        return false;
    }

    if(!List(['entries', 'keys', 'forEach', 'values', 'add', 'clear', 'delete', 'has', 'toString'], (property)=>Method(value, property))) {

        return false;
    }

    if(!Properties(value, 'size')) {

        return false;
    }

    return true;
}
