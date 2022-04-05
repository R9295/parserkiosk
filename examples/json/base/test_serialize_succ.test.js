
const {
    assert_dict,
    assert_list,
    assert_float,
    
} = require('./commons');
const { readFileSync } = require('fs');


it('', () => {
    const data = "''"
    const expected = ''
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_unicodeEscapedBackslash.json", "utf-8")
    const expected = ["/"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[20e1]"
    const expected = [200.0]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[2] "
    const expected = [2]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_double_escape_a.json", "utf-8")
    const expected = ""
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[-1]"
    const expected = [-1]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[1E12]"
    const expected = [1000000000000.0]
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[1E22]"
    const expected = [1e+22]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_allowed_escapes.json", "utf-8")
    const expected = ""
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[true]"
    const expected = [True]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "-0.1"
    const expected = -0.1
    const serialized_data = JSON.parse(data)
    expect(assert_float(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_object_with_newlines.json", "utf-8")
    const expected = {"a":"b"}
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_unicode_U_plus_1FFFE_nonchar.json", "utf-8")
    const expected = ""
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_nonCharacterInUTF_minus_8_U_plus10FFFF.json", "utf-8")
    const expected = ""
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[123e45]"
    const expected = [1.23e+47]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_object_duplicated_key.json", "utf-8")
    const expected = {"a":"c"}
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_object_basic.json", "utf-8")
    const expected = {"a":"b","a":"c"}
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_last_surrogates_1_and_2.json", "utf-8")
    const expected = ""
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[1e+2]"
    const expected = 100.0
    const serialized_data = JSON.parse(data)
    expect(assert_float(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_unicode_U_plus_FFFE_nonchar.json", "utf-8")
    const expected = ""
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_uEscape.json", "utf-8")
    const expected = ""
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_two_byte_utf_8.json", "utf-8")
    const expected = ""
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_in_array_with_leading_space.json", "utf-8")
    const expected = ["asd"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_array_with_1_and_newline.json", "utf-8")
    const expected = [1]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[1E-2]"
    const expected = [0.01]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_escaped_control_character.json", "utf-8")
    const expected = ""
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = " [1]"
    const expected = [1]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_one_byte_utf_8.json", "utf-8")
    const expected = ""
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[123.456e78]"
    const expected = [1.23456e+80]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_object_extreme_numbers.json", "utf-8")
    const expected = {"min": -1e+28, "max": 1e+28}
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_object_duplicated_key_and_value.json", "utf-8")
    const expected = {"a":"b"}
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[]"
    const expected = []
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_array_heterogeneous.json", "utf-8")
    const expected = [None, 1, "1", {}]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[-0.000000000000000000000000000000000000000000000000000000000000000000000000000001]"
    const expected = [-1e-78]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_pi.json", "utf-8")
    const expected = ["π"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_unicode_escaped_double_quote.json", "utf-8")
    const expected = ['"']
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_array_empty_string.json", "utf-8")
    const expected = [""]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[false]"
    const expected = [False]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_unicode_U_plus_2064_invisible_plus.json", "utf-8")
    const expected = ["+"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_object_string_unicode.json", "utf-8")
    const expected = {}
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_object_escaped_null_in_key.json", "utf-8")
    const expected = {'foo\x00bar': 42}
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_simple_ascii.json", "utf-8")
    const expected = ["asd "]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_unicode_U_plus_FDD0_nonchar.json", "utf-8")
    const expected = ["\ufdd0"]
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_nonCharacterInUTF_8_U_plus_FFFF.json", "utf-8")
    const expected = [""]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[0e+1]"
    const expected = [0.0]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_unescaped_char_delete.json", "utf-8")
    const expected = [""]
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[1E+2]"
    const expected = [100.0]
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_unicode_U_plus_200B_ZERO_WIDTH_SPACE.json", "utf-8")
    const expected = ["\u200b"]
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_u_plus_2028_line_sep.json", "utf-8")
    const expected = [" "]
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_accepted_surrogate_pair.json", "utf-8")
    const expected = ["\udd1ea"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_object_empty_key.json", "utf-8")
    const expected = {"":0}
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[123.456789]"
    const expected = [123.456789]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_uescaped_newline.json", "utf-8")
    const expected = ''
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_backslash_doublequotes.json", "utf-8")
    const expected = ["\""]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_object.json", "utf-8")
    const expected = {"asd":"sdf", "dfg":"fgh"}
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_utf8.json", "utf-8")
    const expected = ["€𝄞"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "''"
    const expected = ""
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_null_escape.json", "utf-8")
    const expected = ["\x00"]
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = " "
    const expected = ''
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[1,null,null,null,2]"
    const expected = [1, None, None, None, 2]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[-123]"
    const expected = [-123]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "false"
    const expected = False
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_accepted_surrogate_pairs.json", "utf-8")
    const expected = ["😹💍"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_three_byte_utf_8.json", "utf-8")
    const expected = [""]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "null"
    const expected = None
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "true"
    const expected = True
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_in_array.json", "utf-8")
    const expected = ["asd"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_unicode_U_plus_10FFFE_nonchar.json", "utf-8")
    const expected = ""
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_unicode_2.json", "utf-8")
    const expected = ["⍂㈴⍂"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[123e65]"
    const expected = [1.23e+67]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[null]"
    const expected = [None]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_double_escape_n.json", "utf-8")
    const expected = ["\n"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "42"
    const expected = 42
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_backslash_and_u_escaped_zero.json", "utf-8")
    const expected = ["\x00"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_escaped_noncharacter.json", "utf-8")
    const expected = ["\uffff"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_with_del_character.json", "utf-8")
    const expected = ["a\x7fa"]
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "{}"
    const expected = {}
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_nbsp_uescaped.json", "utf-8")
    const expected = ["new\xa0line"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_reservedCharacterInUTF_8_U_plus_1BFFF.json", "utf-8")
    const expected = ["𛿿"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[1e-2]"
    const expected = [0.01]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_1_2_3_bytes_UTF_8_sequences.json", "utf-8")
    const expected = ["`Īካ"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[[]   ]"
    const expected = [[]]
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[-0]"
    const expected = [0]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_structure_trailing_newline.json", "utf-8")
    const expected = ["a"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_surrogates_U_plus_1D11E_MUSICAL_SYMBOL_G_CLEF.json", "utf-8")
    const expected = ["𝄞"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "asd"
    const expected = "asd"
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = " [] "
    const expected = []
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_unicode.json", "utf-8")
    const expected = []
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[0e1]"
    const expected = [0.0]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_object_simple.json", "utf-8")
    const expected = {"a":[]}
    const serialized_data = JSON.parse(data)
    expect(assert_dict(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_array_ending_with_newline.json", "utf-8")
    const expected = ["a"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_u_plus_2029_par_sep.json", "utf-8")
    const expected = [" "]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[-0]"
    const expected = [0]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[ 4]"
    const expected = [4]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = "[123]"
    const expected = [123]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})

it('', () => {
    const data = readFileSync("fixtures/y_string_comments.json", "utf-8")
    const expected = ["a/*b*/c/*d//e"]
    const serialized_data = JSON.parse(data)
    expect(assert_list(serialized_data, expected)).toBe(true)
})
