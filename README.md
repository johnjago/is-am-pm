# is-am-pm
[![Build Status](https://travis-ci.org/johnjago/is-am-pm.svg?branch=master)](https://travis-ci.org/johnjago/is-am-pm)

Check whether it's a.m. or p.m. in local time. When given a number *n*, it is
assumed that *0 <= n <= 23*, which is the hour of the day on a 24-hour clock.
Behavior is undefined for values of *n* outside that range.

Compatible with **Node.js 8 or higher**.

## Usage

```js
import { isAM, isPM } from 'is-am-pm';

isAM(new Date('1995-12-17T03:24:00')); // true
isPM(20); // true
isPM(8); // false
```

## License

MIT
