const { join } = require("path");

/**
 * Class Keyword
 */
class IdolModel{
    name;
    year;
    
    // constructor - 생성자
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    sayName(){
        return `안녕하세요 저는 ${this.name}입니다`;
    }
}
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);

console.log(yuJin.name);
console.log(yuJin.year);


// class IdolModel{
//     // name;
//     // year; 정의하지 않아도 자바스크립에서는 가능하지만 정의하는 것을 권장
    
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }

// }


console.log(yuJin.sayName());
console.log(gaeul.sayName());

// 클래스는 함수다
// 클래스로 생성한 오브젝트는 객체다
console.log(typeof IdolModel);
console.log(typeof yuJin);

