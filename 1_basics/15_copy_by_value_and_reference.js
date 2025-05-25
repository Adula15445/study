/**
 * copy by value 값에 의한 전달
 * copu by reference 참조에 의한 전달
 * 
 * 1. 기본적으로 모든 primitive 값은 copy by value다
 * 2. 객체는 copy by reference다 
 */

const { group } = require("console");

let original = '제라오라';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 는 너무 귀엽습니다';
console.log();
console.log(original);
console.log(clone);

let originalObj = {
    name : '제라오라',
    group : '포켓몬',
}
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

originalObj['group'] = '아듀라';
console.log();
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

let originalObj2 = {
    name : '제라오라',
    group : '포켓몬',
}

let cloneObj2 = {
    name : '제라오라',
    group : '포켓몬',
}
console.log();
console.log(originalObj2 === cloneObj2); 


let originalObj3 = {
    name : '제라오라',
    group : '포켓몬',
}
let cloneObj3 = originalObj3;
cloneObj3['name']  = 'Zeraora';
console.log();
console.log(originalObj3);
console.log(cloneObj3);

/**
 * spread Opearator
 */
const zera = {
    name : '제라오라',
    group : '포켓몬',
};
const zera2 = {
    ...zera,
};
console.log();
console.log(zera);
console.log(zera2);
console.log(zera === zera2);

