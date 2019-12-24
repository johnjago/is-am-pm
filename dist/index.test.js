"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var index_1 = require("./index");
var dateAm = '1995-12-17T03:24:00';
var datePm = '1995-12-17T13:24:00';
var hourAm = 3;
var hourPm = 13;
// AM
ava_1.default("dateIsAm is true for " + dateAm, function (t) {
    t.is(index_1.dateIsAm(new Date(dateAm)), true);
});
ava_1.default("dateIsAm is false for " + datePm, function (t) {
    t.is(index_1.dateIsAm(new Date(datePm)), false);
});
ava_1.default("hourIsAm is true for " + hourAm, function (t) {
    t.is(index_1.hourIsAm(hourAm), true);
});
ava_1.default("hourIsAm is false for " + hourPm, function (t) {
    t.is(index_1.hourIsAm(hourPm), false);
});
// PM
ava_1.default("dateIsPm is true for " + datePm, function (t) {
    t.is(index_1.dateIsPm(new Date(datePm)), true);
});
ava_1.default("dateIsPm is false for " + dateAm, function (t) {
    t.is(index_1.dateIsPm(new Date(dateAm)), false);
});
ava_1.default("hourIsPm is true for " + hourPm, function (t) {
    t.is(index_1.hourIsPm(hourPm), true);
});
ava_1.default("hourIsPm is false for " + hourAm, function (t) {
    t.is(index_1.hourIsPm(hourAm), false);
});
