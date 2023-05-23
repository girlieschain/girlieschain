let s = "Study".toLowerCase().split("").sort();
let t = "Dusty".toLowerCase().split("").sort();

if(s.length != t.length) {
    console.log("Both the strings are not anagarams");
}

for(let i = 0;i < t.length;i++) {
    if(s[i] != t[i]) {
        console.log("Both the strings are not anagrams");
    }
}
console.log("Both strings are anagrams");
