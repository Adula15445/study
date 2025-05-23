/**
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있음
 * 
 * 1) Number (숫자)
 * 2) String (문자열) 
 * 3) Bollean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    Array
 *    object
 */

/**
 * number 타입
 */
const age = 32;
const tempture = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempture);
console.log(typeof pi);
console.log(' ');

const infinity = Infinity;
const ninfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof ninfinity);
console.log(' ')

/**
 * string 타입
 */

const Adula = '아듀라';
console.log(typeof Adula);

const zera = "'제라오라' 아듀라";
console.log(zera);

/**
 * Template Literal
 * 슬래시 그거 설명 필요없지?
 * `` 백틱 : 입력하는 대로 출력
 */

const zera1 =  `제라오라 ' " // 
/ 아듀라`
console.log(zera1);

/**
 * Boolean 타입
 */

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 *   undifind  타입
 *  사용자가 값을 배정하지 않았을 때 자동으로 저장
 */

let zera2;
console.log(zera2)

/**
 * null 타입
 * 명시적으로 값이 없음을 나타냄
 */

let dura = null;
console.log(dura);

/** 
 * symbol 타입
 * 유일무이한 값을 생성할 때 사용
 * 다름 프리밑브 값들과 다르게 
 * Symbol 함수를 호출해서 사용
 */
const symbol1 = Symbol('1');
const symbol2 = Symbol('2');
console.log(symbol1 == symbol2);

/**
 * object 타입
 * 
 * map
 * 키 : 밸류의 쌍
 * 
 */
const dic = {
    red : '빨간색',
    orange : '주황색'
}
console.log(dic);
console.log(dic['red']);
console.log(typeof dic);

/** 
 * Array 타입
 * 
 * 값을 리스트로 나열
 */
const arr = [
    '제라오라',
    '아듀라',
    '루카리오'
]
console.log(arr);
console.log(arr[0]);

arr[1] = 'adual'
console.log(arr[1]);

/**
 * static typing => 변수를 선언할 때 타입 알려줌
 * C
 * dynamic typing => 안알랴줌
 * javasctipt, python
