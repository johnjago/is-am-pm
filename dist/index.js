"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAM(given) {
    return checkAm(given instanceof Date ? given.getHours() : given);
}
exports.isAM = isAM;
function isPM(given) {
    return !isAM(given);
}
exports.isPM = isPM;
function checkAm(hour) {
    return hour < 12 ? true : false;
}
