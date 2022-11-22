import { Player } from './classes/player.js';
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
const response1 = {
    status: 200,
    type: 'Message',
    data: {
        name: 'Mohammad',
        age: 34
    }
};
