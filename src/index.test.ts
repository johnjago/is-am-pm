import test from 'ava';
import { dateIsAm, hourIsAm, dateIsPm, hourIsPm } from './index'

const dateAm: string = '1995-12-17T03:24:00';
const datePm: string = '1995-12-17T13:24:00';
const hourAm: number = 3;
const hourPm: number = 13;

// AM

test(`dateIsAm is true for ${dateAm}`, t => {
  t.is(dateIsAm(new Date(dateAm)), true);
});

test(`dateIsAm is false for ${datePm}`, t => {
  t.is(dateIsAm(new Date(datePm)), false);
});

test(`hourIsAm is true for ${hourAm}`, t => {
  t.is(hourIsAm(hourAm), true);
});

test(`hourIsAm is false for ${hourPm}`, t => {
  t.is(hourIsAm(hourPm), false);
});

// PM

test(`dateIsPm is true for ${datePm}`, t => {
  t.is(dateIsPm(new Date(datePm)), true);
});

test(`dateIsPm is false for ${dateAm}`, t => {
  t.is(dateIsPm(new Date(dateAm)), false);
});

test(`hourIsPm is true for ${hourPm}`, t => {
  t.is(hourIsPm(hourPm), true);
});

test(`hourIsPm is false for ${hourAm}`, t => {
  t.is(hourIsPm(hourAm), false);
});
