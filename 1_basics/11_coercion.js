/**
 * 타입 변환
 * Type conversion
 * 
 * 1. 명시적
 * 2. 암묵적
 */

// 명시적
let age = 32;
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);

/**
 * 명시적 변환 더 배우기
 */
console.log((90).toString());
console.log((true).toString());
console.log((Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0.99'));
console.log(typeof parseFloat('0'), parseFloat('0.99'));

/**
 * Bollean 타입으로 변환
 */

console.log(!!'adula');
console.log(!!'');

console.log(!!0);
console.log(!!'0'); 

console.log(!!{});
console.log(!![]);

/**
 * 1. 아무 글자도 없는 String
 * 2. 값이 없는 경우
 * 3. 0
 * 모두 flase
*/