//Reverse a String:

function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // Output: 'olleh'

//Count Characters:

function countCharacters(str) {
  return str.length;
}
console.log(countCharacters('hello')); // Output: 5

//Capitalize Words:

function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(capitalizeWords('this is a test')); // Output: 'This Is A Test'

//Find Maximum and Minimum (Array Functions):

function findMax(arr) {
    return Math.max(...arr);
  }
  
  function findMin(arr) {
    return Math.min(...arr);
  }
  
  const numbers = [10, 5, 20, 8];
  console.log(findMax(numbers)); // Output: 20
  console.log(findMin(numbers)); // Output: 5

  //Sum of Array (Array Functions):

function arraySum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(arraySum(numbers)); // Output: 43

//Filter Array (Array Functions):

function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers(numbers)); // Output: [10, 20, 8]