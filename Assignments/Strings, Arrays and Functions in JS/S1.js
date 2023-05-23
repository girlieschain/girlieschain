let string = " The Phoenix Guild is the best Women in Web3 Community.   ";
let sample = " Its really amazing."
let n = string.length;

console.log(string.charAt(7)); // This method basically returns a character at the specified index
console.log(string.indexOf("Phoenix")); // This method returns the position of str in the string
console.log(string.substring(5,15)); // This method is used to fetch specific part of string from start to end index
console.log(string.replace("best","great")); // This method is to replace some part of string
console.log(string.toLowerCase()); // This method is to convert the string to lowercase
console.log(string.toUpperCase()); // This method is to convert the string to uppercase
console.log(string.concat(sample)); // This method is to concat or join two strings
console.log(string.split(" ")); // This method is to split the string into an array
console.log(string.trim()); // This method removes the whitespaces at start and end of the string
console.log(string.slice(7,-10)); // This method is used to fetch part of string with +ve and -ve indices