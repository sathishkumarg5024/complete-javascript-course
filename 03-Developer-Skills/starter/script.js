// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (max < temps[i]) max = temps[i];
    if (min > temps[i]) min = temps[i];
  }
  console.log(max, min);
  let amplitude = max - min;
  return amplitude;
};

let amplitude = calcTempAmplitude(temperatures1);
console.log(amplitude);

const temperatures2 = [2, 2, 45, -8, -4, 12, 34, 'error', 90];
// merge these two arrays

// for (let i = 0; i < temperatures2.length; i++) {
//   temperatures1.push(temperatures2[i]);
// }
// console.log(temperatures1);
// console.log(temperatures1.length);

const finalTemp = temperatures1.concat(temperatures2);
console.log(finalTemp);

console.log('=====After merging the two arrays======');
amplitude = calcTempAmplitude(finalTemp);
console.log(amplitude);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius: ')),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

//console.warn()
// console.error()
//console.table()
*/

/////////////////////////////////
// Coding Challenge - 1

const temp1 = new Array(17, 21, 23);
const temp2 = new Array(12, 5, -5, 0, 4);

console.log(`... ${temp1[0]}degC ... ${temp1[1]}degC ... ${temp1[2]}degC...`);
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}degC in ${i + 1} days ...`;
  }
  console.log('...' + str);
};

printForecast(temp1);
printForecast(temp2);
