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
  console.log("map results",results);
  return results;

};

fp.filter = (arr, cb)=>{

  let results = [];
  for(let i = 0; i < arr.length; i++){
    let element = arr[i];
    let result = cb(element);
    console.log("what is the isEven return?", result);
    if(result === true){
      results.push(element);
    };
    console.log("filter results",results);
    return results;
  }

};

fp.reduce = (arr, cb)=>{
  let results = 0;
  for(let i = 0; i < arr.length; i++){
    results = cb(arr[i], results);
  }
  return results;
};



module.exports = fp;
