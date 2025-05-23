/**
 * 6을 이용해서 6x6의 정사각형를 출력하라
 */

let square = "*";
let side = 6;

for(i = 0; i < side; i++) {
    for(j = 0; j < side; j++) {
        process.stdout.write(square);
    }
    console.log("");
}

/**
 * for in
 */

const arr = ['아듀라','노라','제라오라']


for(let key in arr) {
    console.log(key);
    console.log(arr[key]);
}

/**
 * for of
 */

for(let value of arr) {
    console.log(value)
