console.log(parseInt("42"));
console.log(parseInt("42.333"));
console.log(parseInt("4aa2aaaa"));

console.log(parseFloat("42.333aaa"));



// for Int, removes the string(from the end) and the decimal part and returns the integer value. If the string starts with a non-numeric character, it returns NaN.
// for Float, removes the string(from the end) and returns the float value. If the string starts with a non-numeric character, it returns NaN.
// parseInt() and parseFloat() are used to convert a string into an integer or float respectively. They parse the string until they reach a character that is not a valid digit for the specified base (for parseInt) or until they reach a character that is not part of a valid floating-point number (for parseFloat).