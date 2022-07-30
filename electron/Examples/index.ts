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

console.log("STARTING ARRAY");
console.log(testArray);
console.log(testArray.length);

const compressedArray = await CrystalCompressor.compressArray(testArray);
console.log("COMPRESSED ARRAY");
console.log(compressedArray);

const decompressedArray = await CrystalCompressor.decompressArray(
 compressedArray.buffer,
 "Uint32"
);
console.log("DECOMPRESSED ARRAY");
console.log(decompressedArray);
console.log(decompressedArray.length);
