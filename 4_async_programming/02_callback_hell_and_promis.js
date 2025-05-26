// /**
//  * Callback
//  */

const { rmSync } = require("fs");
const { resolve } = require("path");

// function waitAndRun() {
//     setTimeout(() => {
//         console.log('끝')
//     }, 2000);
// }
// waitAndRun();






/**
 * Promise
 */



// const getPromise = (seconds) => new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('완료');
//     }, seconds * 1000);
// });


// getPromise(1)
// .then((res)=>{
//     console.log('---first then---')
//     console.log(res);

//     return getPromise(1);
// }).then((res)=>{
//     console.log('---second then---')
//     console.log(res);

//     return getPromise(1);
// }).then((res)=>{
//     console.log('---third then---')
//     console.log(res);
// });


// const getPromise2 = (seconds) => new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject('Error');
//     }, seconds * 1000);
// });

// getPromise2(3)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((res) => {
//         console.log('---catch---')
//         console.log(res);
//     })
//     .finally(()=>{
//         console.log('---finally---')
//     });

const getPromise3 = (seconds) => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('완료');
    }, seconds * 1000);
});

// 가장 느린 함수 기준으로 then이 불린다
Promise.all([
    getPromise3(1),
    getPromise3(2),
    getPromise3(3),

]).then((res)=>{
    console.log(res);
})