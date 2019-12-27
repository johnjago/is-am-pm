"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var index_1 = require("./index");
var dateAM = new Date('1995-12-17T03:24:00');
var datePM = new Date('1995-12-17T13:24:00');
var hourAM = 0;
var hourPM = 12;
// AM
ava_1.default("isAM is true for " + dateAM, function (t) {
    t.is(index_1.isAM(dateAM), true);
});
ava_1.default("isAM is false for " + datePM, function (t) {
    t.is(index_1.isAM(datePM), false);
});
ava_1.default("isAM is true for " + hourAM, function (t) {
    t.is(index_1.isAM(hourAM), true);
});
ava_1.default("isAM is false for " + hourPM, function (t) {
    t.is(index_1.isAM(hourPM), false);
});
// PM
ava_1.default("isPM is true for " + datePM, function (t) {
    t.is(index_1.isPM(datePM), true);
});
ava_1.default("isPM is false for " + dateAM, function (t) {
    t.is(index_1.isPM(dateAM), false);
});
ava_1.default("isPM is true for " + hourPM, function (t) {
    t.is(index_1.isPM(hourPM), true);
});
ava_1.default("isPM is false for " + hourAM, function (t) {
    t.is(index_1.isPM(hourAM), false);
});
