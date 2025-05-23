/**
 * Array Functions
 */

let adula = [
    '아듀라',
    '제라오라',
    '루카리오'
]
console.log(adula);

// push()
// 맨 끝에 추가
adula.push('adula')
console.log(adula.push('adula'));
// 추가한 후의 길이를 반환함
console.log(adula);

// pop()
// 마지막 값을 반환하고 제거
console.log(adula.pop());
console.log(adula); 

// shift()
// 첫번째 값을 반환하고 제거
console.log(adula.shift());
console.log(adula);

// unshift()
// 첫번째에 값을 추가
// 추가한 후의 길이 반환

console.log(adula.unshift('zeraora'));
console.log(adula);

// splice(x, y) 
// x부터 y까지 삭제하고 싶은 범위 지정
console.log(adula.splice(0, 2));
console.log(adula);

adula = [
    '아듀라',
    '제라오라',
    '루카리오'
]

console.log(adula);
// concat()
// 아예 다른 메모리 공간에 새로운 Array를 만들어 저장.
// 원래 Array는 바뀌지 않음
console.log(adula.concat('adula'));
console.log(adula);

// slice()
// 지정한 범위를 잘라서 가져옴
// 원래거 안바뀜
console.log(adula.slice(0,2));
console.log(adula);

// spread operator
// ...하면 리스트를 벗겨내고 값을 넣음
let adula2 =[
    ...adula,
];
console.log(adula2);

let adula3 = [
    adula,
];
console.log(adula3);

let adula4 = adula;
console.log(adula);
console.log(adula === adula4);

// 완전 새로운 Array, 메모리 공간이 다름
// console.log([...adula,] === adula);

// join()
// String 으로 묶을 수 있음.
console.log(adula.join());
console.log(typeof adula.join());
console.log(adula.join('/'));

// sort()
// 오름차순 정렬
// 원래 Array 변경됨
adula.sort();
console.log(adula);
// 거꾸로
console.log(adula.reverse());

let nums = [
    1,
    9,
    6,
    7,
    5
];
console.log(nums);

// a, b를 비교했을 때
// 1. a를 b보다 나중에 정렬하려면 0보다 큰 숫자를 반환
// 2. a를 b보다 먼저 정렬하려면 0보다 작은 숫자를 반환
// 3. 원래 순서를 그대로 두려면 0을 반환
nums.sort((a, b) =>{
    return a > b ? 1 : -1;
})
console.log(nums);

nums.sort((a, b) =>{
    return a > b ? -1 : 1;
})
console.log(nums);

// map()
// 하나씩 순회함. 새로 만듬.
console.log(adula.map((x) => x));
console.log(adula.map((x) => `아듀라 : ${x}`));

console.log(adula.map((x) => {
    if(x === '아듀라'){
        return `아듀라 : ${x}`;
    } else{
        return x;
    }
}));

console.log(adula);

// filter() 
// 모든 해당하는 값을 반환
nums = [1, 8, 9, 3, 6];
console.log(nums.filter((x) => true));
console.log(nums.filter((x) => false));
console.log(nums.filter((x) => x % 2 === 0));

// find() 
// 제일 처음 나오는 해당하는 반환
console.log(nums.find((x) => x % 2 === 0));

// findindex()
console.log(nums.findIndex((x) => x % 2 === 0));

// reduce()
console.log(nums.reduce((p, n) => p + n, 0));

