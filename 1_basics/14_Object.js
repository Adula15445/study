/**
 * Object : 객체
 *  */

const { Z_UNKNOWN } = require("zlib");

// key : value pair
let zeraora = {
    name: '제라오라',
    group: '포켓몬',
    avility : function() {
        return `${this.name}가 기술을 씁니다`;
    }
};
console.log(zeraora);
console.log(zeraora.name);
console.log(zeraora['name']);

const key = 'name';
console.log(zeraora[key]);
console.log(zeraora.avility());

const namekey = 'name';
const namevalue = '제라오라';

const zeraora2 = {
    [namekey] : namevalue,
    dance : function() {
        return `${this.name}가 춤을 춥니다.`;

    }
}
console.log(zeraora2);
console.log(zeraora2.dance());

zeraora['group'] = '아듀라';
console.log(zeraora);

zeraora2['englishName'] = 'Zeraora';
console.log(zeraora2);

delete zeraora2['englishName'];
console.log(zeraora2);

/**
 * 객체의 특징
 * 1. const로 선언할경우 객체 자체를 변경 할 수는 없다.
 * 2. 객체 안의 프로퍼티나 메서드는 변경할 수 있다.
 */

const zera = {
    name: '제라오라',
    group: '포켓몬',
}
console.log(zera);
zera['group'] = '아듀라';
console.log(zera);

/**
 * 모든 키값 다 가져오기
 */

console.log(Object.keys(zera));

/**
 * 모든 밸류값 다 가져오기
 */

console.log(Object.values(zera));

const name = '제라오라';

const zera3 = {
    name,
};
console.log(zera3);