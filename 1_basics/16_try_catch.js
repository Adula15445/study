const { error } = require("console");

/**
 * try...catch
 * 
 * 1. 발생시킬때 -> 던진다고 한다
 * 2. 명시적으로 인지할 때-> 잡는다고 한다
 */
function runner(){
    try{
        console.log('Hello');
        throw new Error('문제가 생겼습니다');
        console.log('Zeraora');

    }catch(e){
        console.log('--catch--');
        console.log(e);
    } finally {
        console.log('---finally---')
    }
};
runner();