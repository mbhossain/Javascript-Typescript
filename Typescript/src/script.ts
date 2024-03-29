import { Player } from './classes/player.js';
import { IsPlayer } from './interfaces/isPlayer.js';
import { RectangleOption } from './interfaces/rectangle-option.js';

const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
let shakib: IsPlayer;
shakib = new Player('Shakib', 37, 'Bangladesh');

console.log(shakib.age);
console.log(shakib.country);

const player: Player[] = [];

player.push(shakib);
player.push(mashrafi);

function drawRectangle(option: RectangleOption) {
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

const addId = <T extends object>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
}

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

enum RType { Success, Failure, Unauthenticated, Forbidden };

interface ApiResponse<T> {
    status: number;
    type: RType;
    data: T
}

const response1: ApiResponse<object> = {
    status: 200,
    type: RType.Unauthenticated,
    data: {
        name: 'Mohammad',
        age: 34
    }
}

console.log(response1);

//Tuples

let a = [3, 'Belal', { p: 3 }];
a[1] = 5; //Without Tuples no problem

let b: [number, string, object] = [2, 'Mohammad', { t: 1 }];
// b[1]=7 // With Tuples make compile time error