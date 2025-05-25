/**
 * Property Attribute
 * 
 * 1. 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2. 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 
 * 설정할 때 호출되는 함수로 구성된 프로퍼티
 * 예: getter setter
 */

const Zeraora = {
    name: '제라오라',
    year: 2007,
};

console.log(Object.getOwnPropertyDescriptor(Zeraora, 'name'));
console.log(Object.getOwnPropertyDescriptor(Zeraora, 'year'));

/**
 * 1. value - 실제 프로퍼티의 값
 * 2. writeable - 값을 수정할 수 있느지 여부. false로 설정하면 프로퍼티 값을 수정할 수 없다.
 * 3. enumerable - 열거가 가능한지 여부이다. for...in 룹 등을 사용할 수 있으면 true를 반환한다
 * 4. configurable - 프로퍼티 어트리뷰트의 제정의가 가능한지 여부를 판단한다. 
 * false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다.
 * 단, writeable이 true인 경우 값 변경과 writeable을 변경하는건 가능하다.
 */

console.log(Object.getOwnPropertyDescriptor(Zeraora));

const Zeraora2 = {
    name: '제라오라',
    year: 2007,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Zeraora2);
console.log(Zeraora2.age);
Zeraora2.age = 32;
console.log(Zeraora2.age);
console.log(Zeraora2.year);

console.log(Object.getOwnPropertyDescriptor(Zeraora2, 'age'))

Object.defineProperty(Zeraora2, 'height', {
    value: 150,
    writable: true,
    enumerable: true,
    configurable: true,
})

console.log(Zeraora2);
console.log(Object.getOwnPropertyDescriptor(Zeraora2, 'height'));
Zeraora2.height = 180;
console.log(Zeraora2);

/**
 * Writeable 
 */
Object.defineProperty(Zeraora2, 'height', {
    writable: false,
})
console.log(Object.getOwnPropertyDescriptor(Zeraora2, 'height'));
Zeraora2.height = 172;
console.log(Zeraora2);

/**
 * Enumerable 
*/

console.log(Object.keys(Zeraora2));
Object.defineProperty(Zeraora2, 'name', {
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(Zeraora2, 'name'));
console.log(Object.keys(Zeraora2));
console.log(Zeraora2);
console.log(Zeraora2.name);

/**
 * Configurable 
 */
Object.defineProperty(Zeraora2, 'height', {
    writable: true, 
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(Zeraora2, 'height'));

// Object.defineProperty(Zeraora2, 'height', {
//     enumerable: false,
// }); 오류

Object.defineProperty(Zeraora2, 'height',{
    value: 172,
});

console.log(Object.getOwnPropertyDescriptor(Zeraora2, 'height'));