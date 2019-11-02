import TypeObject from "t-object/boolean/type";
import SymbolToString from "t-object/boolean/symbol-to-string";
import SymbolIterator from "t-object/boolean/symbol-iterator";
import Methods from "t-object/boolean/methods";
import Properties from "t-object/boolean/properties";

export default function Type<Value = any> (value : any) : value is Set<Value> {

    if(!TypeObject(value)) {

        return false;
    }

    if(!SymbolToString(value)) {

        return false;
    }

    if(!SymbolIterator(value)) {

        return false;
    }

    if(!Methods(value, 'entries', 'keys', 'forEach', 'values', 'add', 'clear', 'delete', 'has')) {

        return false;
    }

    if(!Properties(value, 'size')) {

        return false;
    }

    return true;
}