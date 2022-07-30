import { TypeArraysNames } from "./Meta/Array.types";
export declare const CCCore: {
    compressArrayBuffer(input: ArrayBuffer): Promise<Uint8Array>;
    decompressArrayBuffer(input: ArrayBuffer): Promise<[Uint8Array[], number]>;
    processArray(type: TypeArraysNames, arrays: Uint8Array[], totalSize: number): Uint8Array | Int8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array;
    arrayStrides: {
        Int8: number;
        Uint8: number;
        Uint8Clamped: number;
        Int16: number;
        Uint16: number;
        Int32: number;
        Uint32: number;
        Float32: number;
        Float64: number;
        BigInt64: number;
        BigUint64: number;
    };
    getArray: {
        Int8: (size: number) => Int8Array;
        Uint8: (size: number) => Uint8Array;
        Uint8Clamped: (size: number) => Uint8ClampedArray;
        Int16: (size: number) => Int16Array;
        Uint16: (size: number) => Uint16Array;
        Int32: (size: number) => Int32Array;
        Uint32: (size: number) => Uint32Array;
        Float32: (size: number) => Float32Array;
        Float64: (size: number) => Float64Array;
        BigInt64: (size: number) => BigInt64Array;
        BigUint64: (size: number) => BigUint64Array;
    };
};
