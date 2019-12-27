import test from 'ava';
import { isAM, isPM } from './index'

const dateAM: Date = new Date('1995-12-17T03:24:00');
const datePM: Date = new Date('1995-12-17T13:24:00');
const hourAM: number = 0;
const hourPM: number = 12;

// AM

test(`isAM is true for ${dateAM}`, t => {
  t.is(isAM(dateAM), true);
});

test(`isAM is false for ${datePM}`, t => {
  t.is(isAM(datePM), false);
});

test(`isAM is true for ${hourAM}`, t => {
  t.is(isAM(hourAM), true);
});

test(`isAM is false for ${hourPM}`, t => {
  t.is(isAM(hourPM), false);
});

// PM

test(`isPM is true for ${datePM}`, t => {
  t.is(isPM(datePM), true);
});

test(`isPM is false for ${dateAM}`, t => {
  t.is(isPM(dateAM), false);
});

test(`isPM is true for ${hourPM}`, t => {
  t.is(isPM(hourPM), true);
});

test(`isPM is false for ${hourAM}`, t => {
  t.is(isPM(hourAM), false);
});
