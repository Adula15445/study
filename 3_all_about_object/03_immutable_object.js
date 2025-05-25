const { zstdCompress, Z_TREES } = require("zlib");

/**
 * Immutable Object
 */
const Zeraora = {
    name: '제라오라',
    year: 2007,
    
    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        return new Date().getFullYear - age;
    }
}

console.log(Zeraora);

/**
 * Extensible false일 때 값을 추가할 수 없음
 */
console.log(Object.isExtensible(Zeraora));
Zeraora['position'] = 'vocal';
console.log(Zeraora);

Object.preventExtensions(Zeraora);
console.log(Object.isExtensible(Zeraora));

Zeraora['groupName'] = '아듀라';
console.log(Zeraora);
// 하지만 삭제는 가능
delete Zeraora['position'];
console.log(Zeraora);

/**
 * Seal
 */
const Zeraora2 = {
    name: '제라오라',
    year: 2007,
    
    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        return new Date().getFullYear - age;
    }
}
console.log(Zeraora2);
console.log(Object.isSealed(Zeraora2));
Object.seal(Zeraora2);
console.log(Object.isSealed(Zeraora2));
// 추가되지 않음
Zeraora2['groupname'] = '아듀라'; 
console.log(Zeraora2);
// 삭제되지 않음
delete Zeraora2['name'];
console.log(Zeraora2);

Object.defineProperty(Zeraora2, 'name', {
    value: 'Zeraora',
});
console.log(Object.getOwnPropertyDescriptor(Zeraora2, 'name'))
// configurable 을 false 로 한 것과 같음

/**
 * Freezed
 * 
 * 읽기 외의 모든 기능을 불가능하게 만듬
 */

const Zeraora3 = {
    name: '제라오라',
    year: 2007,
    
    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        return new Date().getFullYear - age;
    }
}
console.log(Object.isFrozen(Zeraora3));
Object.freeze(Zeraora3);
Zeraora3['groupname']   = '아듀라';
console.log(Zeraora3);

delete Zeraora3['name'];
console.log(Zeraora3);

console.log(Object.getOwnPropertyDescriptor(Zeraora3, 'name'));

const Zeraora4 = {
    name : '제라오라',
    year : 2007,
    Lucario : {
        name : '루카리오',
        year : 2009,
    }
}
Object.freeze(Zeraora4); 
// 하위 오브젝트까지 적용되지 않음
console.log(Object.isFrozen(Zeraora4));
console.log(Object.isFrozen(Zeraora4['Lucario']));
