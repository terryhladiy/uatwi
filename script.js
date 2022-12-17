let arr = +prompt('write a length');
let newArray = new Array(arr);
let count = [];
for (let i = 0; i <= newArray.length; i++) {
    const num = +prompt('Введите число');
    count[i] = num;
}

console.log(count);
console.log(count.sort());
count.splice(2,3);
console.log(count)


