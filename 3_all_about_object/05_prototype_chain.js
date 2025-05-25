/**
 * Prototype
 */

const { default: test } = require("node:test");

const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값
console.log(testObj.__proto__);

function IdolModel(name, year){
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype);

console.dir(IdolModel.prototype, {
    showHidden: true,
});

// circular reference
console.log(IdolModel.prototype.constructor === IdolModel);
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const Zera = new IdolModel('제라오라', 2007);

console.log(Zera.__proto__);
console.log(Zera.__proto__ === IdolModel.prototype);
console.log(testObj.__proto__ === Object.prototype);

console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);

console.log(Zera.toString());
console.log(Object.prototype.toString());


function IdolModel2(name, year) {
    this.name = name;
    this.year = year;
    this.sayHello = function(){
        return `${this.name}이 인사를 합니다.`
    }
}

const Zera2 = new IdolModel2('제라오라', 2007);
const Luca2 = new IdolModel2('루카리오', 2005);
console.log(Zera2.sayHello === Luca2.sayHello);

// 안에 있는 값인가? (상속받은 값이 아닌가?)
console.log(Zera2.hasOwnProperty('sayHello'));

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}
IdolModel3.prototype.sayHello = function(){
    return `${this.name}가 인사를 합니다.`;
}

const Zera3 = new IdolModel3('제라오라', 2007);
const Luca3 = new IdolModel3('루카리오', 2005);
console.log(Zera3.sayHello());
console.log(Luca2.sayHello());
console.log(Zera3.sayHello === Luca3.sayHello);

console.log(Zera3.hasOwnProperty('sayHello'));

IdolModel3.sayStaticHello = function() {
    return '안녕하세요 static method 입니다';
}

console.log(IdolModel3.sayStaticHello());

function IdolModel4(name, year){
    this.name = name;
    this.year = year; 

    this.sayHello = function() {
        return '안녕하세요 인스턴스 메서드입니다'
    }
}

IdolModel4.prototype.sayHello = function(){
    return '안녕하세요 prototype method 입니다'

}

// 프로퍼티 새도잉 - class에서 override
const Zera4 = new IdolModel4('제라오라', 2007);
console.log(Zera4.sayHello());

/**
 * getPrototypeOf(), setPrototypeof
 * 
 * 인스턴스의 __proto__ vs 함수의 prototype 변경
 */


function IdolModel5(name, year) {
    this.name = name;
    this.year = year;
}
IdolModel5.prototype.sayHello = function() {
    return `${this.name}이/가 인사를 합니다`
}

function FemaleIdolModel5(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}이/가 춤을 춥니다`
    }
}

const Zera5 = new IdolModel5('제라오라', 2007);
const Luca5 = new FemaleIdolModel5('루카리오', 2004);

console.log(Zera5.__proto__);
console.log(Zera5.__proto__ === IdolModel5.prototype);
console.log(Object.getPrototypeOf(Zera5) === IdolModel5.prototype);

console.log(Zera5.sayHello());
console.log(Luca5.dance());

Object.setPrototypeOf(Luca5, IdolModel5.prototype);
console.log(Luca5.sayHello());

console.log(Luca5.constructor);
console.log(Luca5.dance());

FemaleIdolModel5.prototype = IdolModel5.prototype;

const eSeo = new FemaleIdolModel5('이서', 2005);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel5.prototype);
console.log(FemaleIdolModel5.prototype === IdolModel5.prototype);


