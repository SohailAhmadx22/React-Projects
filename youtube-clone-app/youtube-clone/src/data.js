//  export const API_KEY = 'AIzaSyAhfYCpXsOtkxFx4FM3mfivf53CMvCbagI';
// export const value_convertor = (value) =>{
//     if(value > 1000000){
//         return Math.floor(value/1000000)+'M';
//     }
//     else if(value >1000){
//         return Math.floor(value/1000)+'K'
//     }
//       else if(value >100000000){
//         return Math.floor(value/1000)+'b'
//     }
//     else{
//         return value;
//     }
//  }
// src/data.js

export const API_KEY = 'AIzaSyAhfYCpXsOtkxFx4FM3mfivf53CMvCbagI';


export const value_convertor = (value) => {
  if (value > 100000000) {
    return Math.floor(value / 1000000) + 'B';
  } else if (value > 1000000) {
    return Math.floor(value / 1000000) + 'M';
  } else if (value > 1000) {
    return Math.floor(value / 1000) + 'K';
  } else {
    return value;
  }
};
