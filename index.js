"use strict";

/*
Написать функцию, принимающею строку в качестве аргумента, возвращающую
количество главных в строке. Галсные a e i o u, верхний регистр тоже.

*/

const countVowels = (string) => {
  const stringToIterate = string.toLowerCase();
  const vowelsList = ["a", "e", "i", "o", "u"];
  return string.toLowerCase().split('').filter((letter) => vowelsList.includes(letter)).length; 
};