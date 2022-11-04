/*Значение null представляет отсутствие какого-либо объектного значения. В JavaScript, null является примитивом, и в контексте логических операций, рассматривается как ложное (falsy). Синтаксис. null Описание. Значение null записывается литералом null. Оно является самостоятельным, а не свойством глобального объекта (как undefined).*/

let name = null;
const lastName = null;

console.log(name + lastName); //0
console.log(name ** lastName); //1
console.log(name - lastName); //0
console.log(name / lastName); //NaN
console.log(name % lastName); //NaN