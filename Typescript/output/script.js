import { Player } from './classes/player.js';

const outputElement = document.getElementById('output');
console.log = function(message) {
    if (typeof message === 'object') {
        outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
    } else {
        outputElement.innerHTML += message + '\n';
    }
};

const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
let shakib;
shakib = new Player('Shakib', 37, 'Bangladesh');
console.log(shakib.age);
console.log(shakib.country);
const player = [];
player.push(shakib);
player.push(mashrafi);
function drawRectangle(option) {
    return option.width * option.height;
}
const result = drawRectangle({
    width: 30,
    height: 20
});
console.log(result);
//Generics for Class
// const addId = (obj: object) => { // Without Generics
//     let id = Math.floor(Math.random() * 100);
//     return { ...obj, id };
// }
const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: 'Mashrafi',
    age: 40
});
console.log(user.age); // Without Generics user didn't suggest name & age
//Generics for interface
// interface ApiResponse<T> {
//     status: number;
//     type: string;
//     data: T
// }
// const response1: ApiResponse<object> = {
//     status: 200,
//     type: 'Message',
//     data: {
//         name: 'Mohammad',
//         age: 34
//     }
// }
// Enums
var RType;
(function (RType) {
    RType[RType["Success"] = 0] = "Success";
    RType[RType["Failure"] = 1] = "Failure";
    RType[RType["Unauthenticated"] = 2] = "Unauthenticated";
    RType[RType["Forbidden"] = 3] = "Forbidden";
})(RType || (RType = {}));
;
const response1 = {
    status: 200,
    type: RType.Unauthenticated,
    data: {
        name: 'Mohammad',
        age: 34
    }
};
console.log(response1);
//Tuples
let a = [3, 'Belal', { p: 3 }];
a[1] = 5; //Without Tuples no problem
let b = [2, 'Mohammad', { t: 1 }];
// b[1]=7 // With Tuples make compile time error