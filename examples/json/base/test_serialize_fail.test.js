
const {
    assert_dict,
    assert_list,
    assert_float,
    
} = require('./commons');
const { readFileSync } = require('fs');


it('Should not parse an array with multiple entries with no comma separation', () => {
    const data = "[1 true]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[ÿ]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[-]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('Should not parse a bracket used as object key', () => {
    const data = "{[: \"x\"}"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('Should not parse two commas in a row in an object', () => {
    const data = "{\"a\":\"\",,\"c\":\"d\"}"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[2.e-3]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1.0e-]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "aÃ¥"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_object_lone_continuation_byte_in_key_and_trailing_comma.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = ""
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1eE2]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[0E+]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[- 1]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "<.>"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"asd":"asd"'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '"{a:0}"'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[fals]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1.8011670033376514H-308]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1.2a-3]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[-Infinity]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_escaped_emoji.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"a'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = " "
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = ""
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1]x"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[0x1]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[tru]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1.]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1.0e]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[0.1.2]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_unescaped_newline.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_structure_nullbyte_outside_string", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "{["
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"a":""}/'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"x": true,"'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[ false, tru"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[<null>]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[2.e3]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_escaped_ctrl_char_tab.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "{"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "{null:null,null:null}"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "['single quote']"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '"{"a""'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_incomplete_escaped_character.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '["  "]'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"a":""}/**//'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "["
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[{"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_invalid_unicode_escape.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[Infinity]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "["
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"a":"a"'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"a":""}//'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[-012]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[-1.0.]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"a" ""}'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"x", null}'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[True]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_structure_whitespace_U_plus_2060_word_joiner.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1,,]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"id":0,,,,,}'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[][]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[012]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[NaN]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[{}"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[0.3e+]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_unescaped_ctrl_char.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "*"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[-01]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"a": true} "x"'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[0e+]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_structure_unescaped_LF_before_string.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"id":0,}'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[']"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1,,2]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '["a"'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"a":""}#'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '["x", truth]'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[-foo]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"a":"'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1]]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = ""
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[+1]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_backslash_00.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "1]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1 true]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "n_object_emoji.json"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_structure_UTF8_BOM_no_data.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[,1]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[-123.123foo]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '""x'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_incomplete_surrogate.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_array_newlines_unclosed.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[x"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"a":""}/**/'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_array_spaces_vertical_tab_formfeed.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[++1234]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "Ã¥"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[aå]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '["x",,]'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "{]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_1_surrogate_then_escape_u1x.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_array_extra_close.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[Ã©]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "{:\"\"}"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_incomplete_surrogate_escape_invalid.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[9.e+]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_unicode_CapitalU.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "ac"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_invalid_utf8_after_escape.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1,]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[Inf]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[2.e+3]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[-.123]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[\"\": 1]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[+Inf]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_structure_incomplete_UTF8_BOM.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_1_surrogate_then_escape.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1,"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "å"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_invalid_backslash_esc.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[ true, fals"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{ "foo" : "ar", "a" }'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[*]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_multidigit_number_then_00.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"a":/*comment*/""}'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[\"\",]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_leading_uescaped_thinspace.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1:2]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "{a: \"\"}"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[   , \"\"]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_array_incomplete.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[0x42]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "{9999E9999:1}"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "{}}"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1ea]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[0.3e]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[123å]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "{key: 'value'}"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_array_unclosed_with_new_lines.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[-1x]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"a":"a" 123}'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_number_U+FF11_fullwidth_digit_one.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '"'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_escape_x.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1.0e+]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[,"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "{,"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[0E]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[\n]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[-NaN]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[-2.]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_number_invalid_utf_8_in_int.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[0.e1]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[,]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"a" }'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[.123]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "é"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[ false, nul"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1+2]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1eå]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[3[4]]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '["asd]'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "2@"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_invalid-utf-8-in-escape.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1 000.0]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_escaped_backslash_bad.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"x"::""}'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "{\"\":"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_incomplete_escape.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[0e+-1]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[\"\"],"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_start_escape_unclosed.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[â ]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[0e]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '["a"'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = ''
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[.2e-3]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[1e1å]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[.-1]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_structure_open_open.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = readFileSync("fixtures/n_string_1_surrogate_then_escape_u.json", "utf-8")
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '""{a""'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "[nul]"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = '{"a":""}#{}'
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})

it('', () => {
    const data = "{1:1}"
    try {
        const serialized_data = JSON.parse(data)
        fail("Expected an error, but didn't get")
    } catch(e){
    }
})
