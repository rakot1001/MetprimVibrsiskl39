"use strict";

/*
Написать функцию, принимающею строку в качестве аргумента, возвращающую
количество главных в строке. Галсные a e i o u, верхний регистр тоже.

*/

const pow = (num, exp) => {
  if(typeof num !=='number'||typeof exp !=='number'){
    throw new TypeError();
  }

  if(exp<=0){
    throw new RangeError('exp must be a positive');
  }
  if (exp === 1) {
    return num;
  }
  return pow(num, exp - 1) * num;
};
