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
