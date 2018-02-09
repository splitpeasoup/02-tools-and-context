'use strict';

const fp = {};

fp.forEach = (arr, cb)=>{ 

  for(let i = 0; i < arr.length; i++){
    let element = arr[i];
    let result = cb(element);
    arr[i] = result;
  }

};

fp.map = (arr, cb)=>{

  let results = [];
  for(let i = 0; i < arr.length; i++){
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

fp.reduce = (arr, cb)=>{
  let results;
  for(let i = 0; i < arr.length; i++){

    results = cb(arr[i], results);

  }
  return results;
};



module.export = fp;
