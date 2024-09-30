"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDisplayName = void 0;
var outputDivElement = document.getElementById('output');
if (outputDivElement) {
    console.log = function (message) {
        if (typeof message === 'object') {
            outputDivElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
        }
        else {
            outputDivElement.innerHTML += message + '\n';
        }
    };
}
var getDisplayName = function (item) {
    if ('name' in item) {
        return {
            animalName: item.name
        };
    }
    else {
        return {
            humanName: item.firstName + ' ' + item.lastName
        };
    }
};
exports.getDisplayName = getDisplayName;
var result = (0, exports.getDisplayName)({ name: 'Cat' });
var result2 = (0, exports.getDisplayName)({ firstName: 'Billal', lastName: 'Hossain' });
console.log(result);
console.log(result2);
