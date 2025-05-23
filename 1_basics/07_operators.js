/**
 * 연산자
 * 

 */

let sample = '99';
console.log(+sample);                   
console.log(typeof +sample);
// string 안의 값이 number이면 number로 반환할 수 있음
// 숫자 아니면 NAN
sample = '아듀라'
console.log(+sample);

/**
 * == : 값의 비교 (타입이 달라고 값아 같으면 같다니...)
 * === : 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == '5');
console.log(5 === 5);
console.log(5 === '5');

/**
 * 삼항 조건
 */

console.log(10 > 0 ? '10이 0보다 큼' : '10이 0보다 작음');
/**
 * 단축평가 (short circult evaluation)
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */
console.log(true && '제라오라');
console.log(false && '제라오라');
console.log(true || '제라오라');
console.log(false || '제라오라');

console.log(true && true && '제라오라');
console.log(true && false && '제라오라');
/**
 * null 연산자
 * 값이 null 또는 nudified 일 때만참
 */
let name;
console.log(name);

name = name ?? '제라오라';
console.log(name);
name = name ?? '아듀라';
