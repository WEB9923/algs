"use strict";

const reversedString = (str) => {
   let reversedSTR = "";
   for (let i = str.length; i >= 0; i -= 1) {
      reversedSTR += str.charAt(i);
   }
   return reversedSTR;
}
console.log("reversed mt1->", reversedString("programming"));
//**##**//
const reverserStr = (str) => {
   let reversedStr = [];
   str.split("").forEach((st) => {
      reversedStr.unshift(st);
   });
   return reversedStr;
}
console.log("reversed mt2->", reverserStr("javascript").join(""));
//**##**//
function detectFirstLetterIsUpperCase(str) {
   return str.charAt(0) === str.charAt(0).toUpperCase();
}
console.log("detectFirstLetterIsUpper->", detectFirstLetterIsUpperCase("hello"));
console.log("detectFirstLetterIsUpper->", detectFirstLetterIsUpperCase("Hello"));
//**##**//
function isPalindrome(str) {
   if(str.length % 2 === 0) { //ამოწმებს მხოლოდ ლუწი რაოდენობის სტრინგებს
      let reversed = str.split("").reverse().join("");
      if(str.toLowerCase() === reversed.toLowerCase()
         &&
         str.length === reversed.length) {
         return true;
      }
      return false;
   }
   return false;
}
console.log("palindrome->", isPalindrome("anna"));
console.log("palindrome->", isPalindrome("saturn"));
//**##**//
function addNums(numbersArray){
   let num = null;
   if (Array.isArray(numbersArray)){
      for (let i = 0; i <= numbersArray.length; i += 1) {
         if(typeof numbersArray[i] === "string") {
            console.log("array includes string!");
            return false;
         }
         num += i;
      }
   }
   return num;
}
console.log("addNums->", addNums([1,2,3,4,5]));
//**##**//
function oddAndEven(numbersArray) {
   const odd = []; const even = [];
   for (let i = 0; i <= numbersArray.length; i += 1) {
      let numbersArrayIndex = numbersArray[i];
      if(Array.isArray(numbersArray)){
         if(numbersArrayIndex % 2 === 0){
            even.push(numbersArrayIndex);
         } if(numbersArrayIndex % 2 === 1){
            odd.push(numbersArrayIndex);
         }
      }
   }return {odd, even};
}
console.log(oddAndEven([5,4,2,3,6,8,9,1,11]));
//**##**//
function firstAndLastLetter(str) {
   let firstLetter = str.charAt(0);
   let lastLetter = str.charAt(str.length - 1);
   return firstLetter === lastLetter;
}
console.log("firstAndLastLetter->",firstAndLastLetter("hello"));
console.log("firstAndLastLetter->",firstAndLastLetter("wow"));
//**##**//
function detectFirstLetterIsUpperCaseAndIfNotUpperConvertToUpper(str) {
   let newWord = "";
   if(str.charAt(0) !== str.charAt(0).toUpperCase()){
      let firstLetterToConvertUpper = str.charAt(0).toUpperCase();
      let sliced = str.slice(1, str.length);
      newWord += `${firstLetterToConvertUpper}${sliced}`;
   }
   return newWord;
}
console.log("detectFirstLetterIsUpperCaseAndIfNotUpperConvertToUpper->",
   detectFirstLetterIsUpperCaseAndIfNotUpperConvertToUpper("javascript")
);
//**##**//
function findVowelsAndConsonant(str){
   let vowels = ["a","e","i","o","u"];
   let obj = {
      word: str.toLowerCase().trim(),
      vowelsCount: null,
      consonantCount: null
   }
   for (let i = 0; i < obj["word"].length; i += 1){
      if(vowels.includes(obj["word"][i])){
         obj["vowelsCount"]++;
      } else{
         obj["consonantCount"]++;
      }
   }
   return obj;
}
console.log("findVowelAndConsonant->", findVowelsAndConsonant("javascript"));

////////////////////////////////////////////////

const reversedWord = (str) => {
   let reversed = "";
   for (let i = str.length; i--;) {
      reversed = reversed + str[i];
   }
   return reversed;
}
console.log(reversedWord("javascript"));
//**##**//
const detectFirstLetterIsUpper = (str) => {
   return str.charAt(0) === str.charAt(0).toUpperCase();
}
console.log(detectFirstLetterIsUpper("Hello"));
//**##**//
const addNumsFomArr = (arr) => {
   let summed = null;
   if (Array.isArray(arr)){
      for (let i = 0; i < arr.length; i++) {
         summed += arr[i];
      }
      const isIncludeString = arr.some((item)=> typeof item === "string");
      if(isIncludeString) console.error("array includes string!!!!!");
   }
   return summed;
}
console.log(addNumsFomArr([1,2,3,4,5]));
//**##**//
function reverseString(str) {
   /*** method 1 ***/
   // return str
   //    .split("")
   //    .reverse()
   //    .join("");
   /*** method 2 ***/
   // let revString = "";
   // for (let i = str.length - 1; i >= 0; i -= 1) {
   //    revString = revString + str[i];
   // }
   // return revString;
   /*** method 3 ***/
   // let revString = "";
   // str.split("").forEach(
   //    (char) => {
   //       console.log(char)
   //       revString = char + revString
   //    }
   // );
   // return revString;
   //*** method 4 ***/
   return str.split("").reduce(
      (previousValue, currentValue) => {
         return currentValue + previousValue;
      }, "")
}
console.log(reverseString("javascript"));
//**##**//
function detectPalindrome(str) {
   const revString = str
      .split("")
      .reverse()
      .join("");
   return revString === str;
}
console.log(detectPalindrome("madam"));
//**##**//
function reverseInt(int) {
   const revString = int
      .toString()
      .split("")
      .reverse()
      .join("");
   return parseInt(revString) * Math.sign(int);
}
console.log(reverseInt(1234))
//**##**//
function maxCharacters(str) {
   let charMap = {};
   str.split("").forEach(char => {
      if(charMap[char]) {
         charMap[char]++;
      } else {
         charMap[char] = 1;
      }
   });
   return charMap;
}
console.log(maxCharacters("hello"));
//**##**//
const capitalizeLetters = (str) => {
   const strArr = str.toLowerCase().split(" ");
   for (let i = 0; i < strArr.length; i += 1) {
      strArr[i] = strArr[i]
            .substring(0, 1)
            .toUpperCase() +
         strArr[i]
            .substring(1);
   }
   return strArr.join(" ");
}
console.log(capitalizeLetters("i love javascript"));
//**##**//
const isAnagram = (str, str2) => {
   return [...str.toLowerCase()].sort().join("")
      === [...str2.toLowerCase()].sort().join("");
}
console.log(isAnagram("listen","silent"));
//**##**//
const ArrWithoutDuplicates = (arr) => [...new Set(arr)];
console.log(ArrWithoutDuplicates([0,0,1,2,2,3,4,5,6,7,7,7,8,9,9]));
//**##**//
const isAllArrElementIsOdd = (arr,cond) => arr.every(cond);
console.log(isAllArrElementIsOdd([2,4,6,8,10],(num) => num % 2 === 0));


