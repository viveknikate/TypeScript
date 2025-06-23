"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrom = isPalindrom;
function isPalindrom(str) {
    return str === str.split('').reverse().join('');
}
