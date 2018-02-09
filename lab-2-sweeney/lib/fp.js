'use strict';

const fp = {};
const sum = (n)=>{ return 2 + n;};
const doubler = (n)=> {2 * n;};
const isEven = (n)=>{n % 2 === 0;};


fp.forEach = (arr, cb)=>{ 

  for(let i = 0; i < arr.length; i++){
    let element = arr[i];
    let result = cb(element);
    arr[i] = result;
  }

};

fp.map = (arr, cb)=>{

  let results = [];
  for(let i= 0; i < arr.length; i++){
    let element = arr[i];
    let result = cb(element);
    results.push(result);
  }
  return results;

};

fp.filter = (arr, cb)=>{

  let results = [];
  for(let i = 0; i < arr.length; i++){
    let element = arr[i];
    let result = cb(element);
    if(result === true){
      results.push(element);
    };
    return results;
  }

};

fp.reduce = (arr,cb)=>{
  let results;
  for(let i = 0; i < arr.length; i++){

    results = results + arr[i];

  }
  return results;
};



module.export = fp;
