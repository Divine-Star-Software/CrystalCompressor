import { TypeArraysNames } from "./Meta/Array.types";
export declare const CCCore: {
    compressArrayBuffer(input: ArrayBuffer): Promise<Uint8Array>;
    decompressArrayBuffer(input: ArrayBuffer): Promise<Uint8Array>;
    processArray(type: TypeArraysNames, array: Uint8Array): Uint8Array | Int8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array;
    getArray: {
        Int8: (buffer: ArrayBuffer) => Int8Array;
        Uint8: (buffer: ArrayBuffer) => Uint8Array;
        Uint8Clamped: (buffer: ArrayBuffer) => Uint8ClampedArray;
        Int16: (buffer: ArrayBuffer) => Int16Array;
        Uint16: (buffer: ArrayBuffer) => Uint16Array;
        Int32: (buffer: ArrayBuffer) => Int32Array;
        Uint32: (buffer: ArrayBuffer) => Uint32Array;
        Float32: (buffer: ArrayBuffer) => Float32Array;
        Float64: (buffer: ArrayBuffer) => Float64Array;
        BigInt64: (buffer: ArrayBuffer) => BigInt64Array;
        BigUint64: (buffer: ArrayBuffer) => BigUint64Array;
    };
};
