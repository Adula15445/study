/**
 * funtion = 함수
 * 
 */

const { type } = require("os");

/**
 * DRY : Don't Repeat Yourself
 */

function plus1(num1, num2) {
    console.log(num1 + num2);
}

plus1(1, 2);

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter 라고 한다.
 * 실제 입력하는 값은 argument라고 한다.
 * 함수를 다시 쓰면 덮어쓰기
 */

function plus2(num1, num2) {
    return num1 + num2;
}
 
console.log(plus2(3, 5));

/** 
 * Arrow 함수
 * 다르게 선언하는 방법 중 하나
 * 기능적으로 완전히 같지는 않음
 */

const mult = (x, y) => {
    return x * y;
}
console.log(mult(3,4));
const mult2 = (x,y) => x*y;
console.log(mult2(4,5));

const mult3 = x => y => z => `x : ${x} y: ${y} z:${z}`;

console.log(mult3(2)(5)(7)); 
function mult4(x) {
    return function(y){
        return function(z){
            return `x : ${x} y: ${y} z:${z}`;
        }
    }
}
console.log(mult3(4)(6)(7)); 

const mult5 = function(x, y) {
    return x * y;
}
console.log(mult5(3,5));

const mult6 = function(x , y, z) {
    console.log(arguments);
}
mult6(5, 6, 3);

const multAll = function(...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);

}
console.log(multAll(3, 4, 5, 6, 7));

// immediaely invoked function
// 즉시 실행 함수
(function(x, y) {
    console.log(x * y);
}) (2, 5);

console.log(typeof mult);
console.log(mult instanceof Object);
