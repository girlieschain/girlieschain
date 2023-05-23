let str = "The Phoenix Guild is the best Women in Web3 Community";
let arr = str.split(" ");
let result = []
arr.forEach(function(word) {
    var new_str = ''
    for(let i = word.length - 1;i >= 0;i--) {
        new_str += word.charAt(i);
    }
    result.push(new_str);
})
console.log(result.join(" "));