'use strict';

const sum = (a,b)=>{ return a + b;};
const doubler = (n)=> {2 * n;};
const isEven = (n)=>{n % 2 === 0;};

describe("given an array will reduce to a single number according to function", () => {
  let expected = 41;
  it("should return the sum of the elements[3,6,7,10,15] of the array", () => {
    let arr = [3,6,7,10,15];
    let result = fp.reduce(arr, sum);
    expect(result).toBe(expected);
  });
});

describe("given an array will map by doubling all elements and return new array", () => {
  let expected = [4,6,8,10];
  it("should return [4,6,8,10] when given [2,3,4,5]",()=>{
    let arr = [2,3,4,5];
    let result = fp.map(arr, doubler);
    expect(result).toBe(expected);
  });
});

describe("given an array will filter and results true to isEven function",()=> {
  let expected = [4,10,12,36];
  it("should return [4,10,12,36] when given [3,4,7,10,11,12,31,36]",()=>{
    let arr = [3,4,7,10,11,12,31,36];
    let result = fp.filter(arr, isEven);
    expect(result).toBe(expected);
  });

});