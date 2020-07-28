# keyframegen
A JavaScript/TypeScript library that generates keyframes of common animations.  For use with WebAnimation API or plain CSS.

## Installation
```
npm i keyframegen
```

## ES Module Usage
```ts
import { Complex } from 'keyframegen';

const complexKeyframes = new Complex();

// Chain as many transformations (scale, rotate, transform, skew) together as you wish
// using options to control duration, delay and easing of each transformation
complexKeyframes.scale();

// Output as CSS or Web Animation keyframe objects, or apply animation to an HTML element
console.log(complexKeyframes.get('css'));
console.log(complexKeyframes.get('webapi'));
complexKeyframes.applyTo(document.getElementById('myAnimatedElement'));
```



<details><summary>Output from complexKeyframes</summary><pre>
@keyframes animation-1 { 
  0% { transform: matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  3.33% { transform: matrix3d(0.703, 0, 0, 0, 0, 0.703, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  6.67% { transform: matrix3d(0.87, 0, 0, 0, 0, 0.87, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  10% { transform: matrix3d(0.977, 0, 0, 0, 0, 0.977, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  13.33% { transform: matrix3d(1.03, 0, 0, 0, 0, 1.03, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  16.67% { transform: matrix3d(1.046, 0, 0, 0, 0, 1.046, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  20% { transform: matrix3d(1.042, 0, 0, 0, 0, 1.042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  23.33% { transform: matrix3d(1.029, 0, 0, 0, 0, 1.029, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  26.67% { transform: matrix3d(1.016, 0, 0, 0, 0, 1.016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  30% { transform: matrix3d(1.006, 0, 0, 0, 0, 1.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  33.33% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  36.67% { transform: matrix3d(0.997, 0, 0, 0, 0, 0.997, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  40% { transform: matrix3d(0.997, 0, 0, 0, 0, 0.997, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  43.33% { transform: matrix3d(0.997, 0, 0, 0, 0, 0.997, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  46.67% { transform: matrix3d(0.998, 0, 0, 0, 0, 0.998, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  50% { transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  53.33% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  56.67% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  60% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  63.33% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  66.67% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  70% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  73.33% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  76.67% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  80% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  83.33% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  86.67% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  90% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  93.33% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  96.67% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  100% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); } 
}

(31) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  0: {offset: 0, transform: "matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  1: {offset: 0.0333, transform: "matrix3d(0.703, 0, 0, 0, 0, 0.703, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  2: {offset: 0.0667, transform: "matrix3d(0.87, 0, 0, 0, 0, 0.87, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  3: {offset: 0.1, transform: "matrix3d(0.977, 0, 0, 0, 0, 0.977, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  4: {offset: 0.1333, transform: "matrix3d(1.03, 0, 0, 0, 0, 1.03, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  5: {offset: 0.1667, transform: "matrix3d(1.046, 0, 0, 0, 0, 1.046, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  6: {offset: 0.2, transform: "matrix3d(1.042, 0, 0, 0, 0, 1.042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  7: {offset: 0.2333, transform: "matrix3d(1.029, 0, 0, 0, 0, 1.029, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  8: {offset: 0.2667, transform: "matrix3d(1.016, 0, 0, 0, 0, 1.016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  9: {offset: 0.3, transform: "matrix3d(1.006, 0, 0, 0, 0, 1.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  10: {offset: 0.3333, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  11: {offset: 0.3667, transform: "matrix3d(0.997, 0, 0, 0, 0, 0.997, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  12: {offset: 0.4, transform: "matrix3d(0.997, 0, 0, 0, 0, 0.997, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  13: {offset: 0.4333, transform: "matrix3d(0.997, 0, 0, 0, 0, 0.997, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  14: {offset: 0.4667, transform: "matrix3d(0.998, 0, 0, 0, 0, 0.998, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  15: {offset: 0.5, transform: "matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  16: {offset: 0.5333, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  17: {offset: 0.5667, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  18: {offset: 0.6, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  19: {offset: 0.6333, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  20: {offset: 0.6667, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  21: {offset: 0.7, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  22: {offset: 0.7333, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  23: {offset: 0.7667, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  24: {offset: 0.8, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  25: {offset: 0.8333, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  26: {offset: 0.8667, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  27: {offset: 0.9, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  28: {offset: 0.9333, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  29: {offset: 0.9667, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  30: {offset: 1, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}
  length: 31
  __proto__: Array(0)
</pre></details>

```ts
import { Simple } from 'keyframegen';

const simpleKeyframes = new Simple();

// Select one of many preset animations with options to fine tune their appearance
simpleKeyframes.set('shake');

// Output as CSS or Web Animation keyframe objects, or apply animation to an HTML element
console.log(simpleKeyframes.get('css'));
console.log(simpleKeyframes.get('webapi'));
simpleKeyframes.applyTo(document.getElementById('myAnimatedElement'));
```



<details><summary>Output from simpleKeyframes</summary><pre>
@keyframes animation-1 { 
  0% { transform: rotate(-14.999999999999998deg); }
  10% { transform: rotate(14.999999999999998deg); }
  20% { transform: rotate(-18deg); }
  30% { transform: rotate(18deg); }
  40% { transform: rotate(-22deg); }
  50% { transform: rotate(22deg); }
  60% { transform: rotate(-18deg); }
  70% { transform: rotate(18deg); }
  80% { transform: rotate(-12deg); }
  90% { transform: rotate(12deg); }
  100% { transform: rotate(0); } 
}

(11) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  0: {offset: 0, transform: "rotate(-14.999999999999998deg)"}
  1: {offset: 0.1, transform: "rotate(14.999999999999998deg)"}
  2: {offset: 0.2, transform: "rotate(-18deg)"}
  3: {offset: 0.3, transform: "rotate(18deg)"}
  4: {offset: 0.4, transform: "rotate(-22deg)"}
  5: {offset: 0.5, transform: "rotate(22deg)"}
  6: {offset: 0.6, transform: "rotate(-18deg)"}
  7: {offset: 0.7, transform: "rotate(18deg)"}
  8: {offset: 0.8, transform: "rotate(-12deg)"}
  9: {offset: 0.9, transform: "rotate(12deg)"}
  10: {offset: 1, transform: "rotate(0)"}
  length: 11
  __proto__: Array(0)
</pre></details>

## Other Usage
Include [dist/keyframegen.min.js](https://raw.githubusercontent.com/CFT-Chris/keyframegen/master/dist/keyframegen.min.js). Exports `Complex` and `Simple`.

## Full API
View the [documentation](https://cft-chris.github.io/keyframegen).

## GitHub Repo
View the [GitHub repo](https://github.com/CFT-Chris/keyframegen).

### Todo
* Interactive Sandbox
* 3D transformations for Complex