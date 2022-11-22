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