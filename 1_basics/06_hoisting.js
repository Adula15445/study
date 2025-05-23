/**
 *  Hoisiting
 *  모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 * 
 */

console.log(name);
name = '아듀라';
console.log(name);
var name;
// let, const 은 hoisiting 방지가 가능함


