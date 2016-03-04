# re-percentage.js
The reverse version of percentage.js.

## Install
```
$ npm install re-percentage
```

## Usage
In Node: 
```
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
```

In the browser:
```
<script src="re-percentage.js"></script>
<script>
repercentage("89%")  // 0.89
</script>
```

## License
MIT