'use strict';

const fp = {};


fp.forEach = (arr, cb)=>{ 
  

  for(let i = 0; i < arr.length; i++){
    let element = arr[i];
    let result = cb(element);
    arr[i] = result;
  
  }

};

// fp.map = (arr, cb)=>{

//   let results = [];
//   console.log("arr-map",arr);
//   for(let i = 0; i < arr.length; i++){
//     console.log("arr-map-for",arr);
//     let element = arr[i];
//     let result = cb(element);
//     console.log("map result-for",result);
//     results.push(result);
//   }
//   console.log("map results",results);
//   return results;

// };

// fp.filter = (arr, cb)=>{

//   let results = [];
//   for(let i = 0; i < arr.length; i++){
//     let element = arr[i];
//     let result = cb(element);
//     if(result === true){
//       console.log("element",element);
//       results.push(element);
//     }
//   }
//   return results;

// };

// fp.reduce = (arr, cb)=>{
//   let results = 0;
//   for(let i = 0; i < arr.length; i++){
//     results = cb(arr[i], results);
//   }
//   return results;
// };



module.exports = fp;
