# re-percentage.js

Convert string percentages to numbers.

The reverse version of [percentage.js](https://github.com/EvanHahn/percentage.js).

## Install
```
$ npm install re-percentage
```

## Usage
In Node: 
```js
var rp = require('re-percentage');

rp('1%')     // 0.01
rp('-1%')    // -0.01
rp('10%')    // 0.1
rp('-10%')   // -0.1
rp('120%')   // 1.2
rp('-120%')  // -1.2
rp('12.0%')  // 0.12
rp('-12.0%') // -0.12
rp('12.5%')  // 0.125
rp('-12.5%') // -0.125
rp('0.23%')  // 0.0023
rp('-0.23%') // -0.0023
rp('∞%')     // Infinity
rp('-∞%')    // -Infinity

rp('1')     // 0.01
rp('-1')    // -0.01
rp('10')    // 0.1
rp('-10')   // -0.1
rp('120')   // 1.2
rp('-120')  // -1.2
rp('12.0')  // 0.12
rp('-12.0') // -0.12
rp('12.5')  // 0.125
rp('-12.5') // -0.125
rp('0.23')  // 0.0023
rp('-0.23') // -0.0023
rp('∞')     // Infinity
rp('-∞')    // -Infinity
```

In the browser:
```html
<script src="./build/re-percentage.min.js"></script>
<script>
repercentage("89%")  // 0.89
</script>
```

## License
MIT