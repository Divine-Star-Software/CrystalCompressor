<h1 align="center">
   Crystal Compressor
</h1>

<p align="center">
<img src="" alt="" border="0">
</p>

---

A simple tool to compress and decompress typed arrays in JavaScript. 

```ts
import { CrystalCompressor } from "../out/index.js";

const testArray = new Uint32Array(67_000);

for (let i = 0; i < testArray.length; i++) {
 let zero = Math.random() > 0.5;
 if (zero) {
  testArray[i] = 0;
 } else {
  testArray[i] = ((Math.random() - 0.5) * 2 * 2 ** 32) >> 0;
 }
}


const compressedArray = await CrystalCompressor.compressArray(testArray);

const decompressedArray = await CrystalCompressor.decompressArray(
 compressedArray.buffer,
 "Uint32"
);

```