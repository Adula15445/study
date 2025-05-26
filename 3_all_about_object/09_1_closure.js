/**
 * Closure
 * 
 * 
 * A closure is the combination of a function and the lexical
 * environment within which that function was declared
 * 클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합니다.
 * 
 * 상위 함수보다 하위 함수가 더 오해 살아있는 경우를 closure라고 한다.
 */
// function getNum(){
//     var num = 5;
//     function innerGetNum(){
//         return num;
//     }

//     return innerGetNum();
// }
// console.log(getNum());

function getNum(){
    var num = 5;
    function innerGetNum(){
        return num;
    }

    return innerGetNum;
}
const runner = getNum();
console.log(runner);
console.log(runner());

/**
 * 1. 데이터 캐싱
 */

function cacheFunction(newNum) {
    // 아래 계산이 매우 오래걸린다는 가정
    var number = 10 * 10;
    function innerCacheFunction(newNum){
        return number * newNum;
        
    }
    return innerCacheFunction;
}
const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(30));

function cacheFunction2(){
    var number = 99;
    function incremnt() {
        number++;
        return number;
    }
    return incremnt;
}

const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());

/**
 * 2. 정보 은닉
 */

 function Idol(name, year){
    this.name = name;
    var _year = year;
    this.say = function(){
        return `${this.name}, ${_year}`
    }
 }

 const Zera = new Idol('제라오라', 2000);
 console.log(Zera.say());
 console.log(Zera.year);
