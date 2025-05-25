/**
 * Static Keyword
 */
// class IdolModel {
//     name;
//     year;
//     static groupName = '아이브'
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
//     static reGruName() {
//         return '아이브';
//     }
// }

// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin);

// console.log(IdolModel.groupName);
// console.log(IdolModel.reGruName());

class IdolModel{
    name;
    year;
    constructor(name,   year) {
        this.name = name;
        this.year =  year;
    }

    static fromObj(object) {
        return new IdolModel(
            object.name,
            object.year,
        );
    }

    static formList(list){
        return new IdolModel(
            list[0],
            list[1],
        );
        
    }
}

const yuJin2 = IdolModel.fromObj({
    name: '안유진',
    year: 2003,
});
console.log(yuJin2);

const wonY = IdolModel.formList(
    [
        '장원영',
        2003
    ]
)
console.log(wonY);