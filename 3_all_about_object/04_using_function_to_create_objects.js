/**
 * Using function to create objects
 */

function IdolModel(name, year){
    this.name = name;
    this.year = year;
}

const Zera = new IdolModel('제라오라', 2007);
console.log(Zera);

// const IdolModelArrow = (name, year) => {
//     this.name = name;
//     this.year = year;
// } IdolModelArrow is not a constructor