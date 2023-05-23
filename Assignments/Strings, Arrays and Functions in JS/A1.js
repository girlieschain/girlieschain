let array = [1,2,3,1,4,6,4,4];

array.forEach(function(num) {
    if (num in array) {
        let index = array.indexOf(num);
        array.splice(index,1);
    }
});

console.log(array);