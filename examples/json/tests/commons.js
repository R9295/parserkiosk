const assert = require('assert');

const assert_dict = (a, b) => {
    try {       
        assert.deepStrictEqual(a, b);
        return true;
    } catch (error) {
        return false
    }
}

const assert_list = (a, b) => {
    try {       
        assert.deepStrictEqual(a, b);
        return true;
    } catch (error) {
        return false
    }
}

const assert_float = (a, b) => {
    return (
        typeof a === "number" && typeof b === "number" && !Number.isInteger(a) && !Number.isInteger(b) && a === b
    )
}

exports.assert_float = assert_float
exports.assert_list = assert_list
exports.assert_dict = assert_dict
