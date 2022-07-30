import { TypeArraysNames, TypedArrays } from "./Meta/Array.types";

export const CCCore = {
 async compressArrayBuffer(input: ArrayBuffer) {
  //@ts-ignore
  const cs = new CompressionStream("gzip");
  const writer = cs.writable.getWriter();
  writer.write(input);
  writer.close();
  const output: Uint8Array[] = [];
  const reader = cs.readable.getReader();
  let totalSize = 0;
  while (true) {
   const { value, done } = await reader.read();
   if (done) break;
   output.push(value);
   totalSize += value.byteLength;
  }
  const concatenated = new Uint8Array(totalSize);
  let offset = 0;
  for (const array of output) {
   concatenated.set(array, offset);
   offset += array.byteLength;
  }
  return concatenated;
 },

 async decompressArrayBuffer(
  input: ArrayBuffer
 ): Promise<[Uint8Array[], number]> {
  //@ts-ignore
  const ds = new DecompressionStream("gzip");
  const writer = ds.writable.getWriter();
  writer.write(input);
  writer.close();
  const output: Uint8Array[] = [];
  const reader = ds.readable.getReader();
  let totalSize = 0;
  while (true) {
   const { value, done } = await reader.read();
   if (done) break;
   output.push(value);
   totalSize += value.byteLength;
  }
  return [output, totalSize];
 },

 processArray(type: TypeArraysNames, arrays: Uint8Array[], totalSize: number) {
  const arrayStrides = this.arrayStrides[type];
  const returnArray = this.getArray[type](totalSize / arrayStrides);
  let k = 0;
  for (const _8Array of arrays) {
   let dataview = new DataView(_8Array.buffer);
   for (let i = 0; i < _8Array.length; i += arrayStrides) {
    returnArray[k] = dataview.getUint32(i, true);
    k++;
   }
  }
  return returnArray;
 },

 arrayStrides: {
  Int8: 1,
  Uint8: 1,
  Uint8Clamped: 1,
  Int16: 2,
  Uint16: 2,
  Int32: 4,
  Uint32: 4,
  Float32: 4,
  Float64: 8,
  BigInt64: 8,
  BigUint64: 8,
 },

 getArray: {
  Int8: (size: number) => {
   return new Int8Array(size);
  },
  Uint8: (size: number) => {
   return new Uint8Array(size);
  },
  Uint8Clamped: (size: number) => {
   return new Uint8ClampedArray(size);
  },
  Int16: (size: number) => {
   return new Int16Array(size);
  },
  Uint16: (size: number) => {
   return new Uint16Array(size);
  },
  Int32: (size: number) => {
   return new Int32Array(size);
  },
  Uint32: (size: number) => {
   return new Uint32Array(size);
  },
  Float32: (size: number) => {
   return new Float32Array(size);
  },
  Float64: (size: number) => {
   return new Float64Array(size);
  },
  BigInt64: (size: number) => {
   return new BigInt64Array(size);
  },
  BigUint64: (size: number) => {
   return new BigUint64Array(size);
  },
 },
};
