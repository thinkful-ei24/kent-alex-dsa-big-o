// Even or Odd
// O(1) - Same amount of time to run no matter what
function isEven(value) {
  if (value % 2 == 0) {
    return true;
  }
  else
    return false;
}

// Are you here?
// O(n^2) - nested for loop
function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

// Doubler
// O(n) - One loop, incrementing by 1
function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// Naive Search
// O(n) - One loop, incrementing by 1
function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// Creating pairs:
// O(n^2) - Nested For loops
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      console.log(arr[i] + ', ' +  arr[j]);
    }
  }
}

// Computing fibonaccis
// O(n) - One loop, incrementing by 1
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

// An Efficient Search
// O(log(n)) - Loop halves the array each iteration
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

// Random element
// O(1) - Same amount of time no matter what the input
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Is it prime?
// O(n) - One loop, incrementing by 1
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

// Counting Sheep
// O(n) - One loop, incrementing by 1
function countSheep(num) {
  //stopping condition of base case
  if (num === 0) {
    console.log('All sheep jumped over the fence');
  }
  //this is the recursive case
  //this will be executed until it reaches base case
  else {
    console.log(`${num}: Another sheep jump over the fence`);
    countSheep(num-1);
  }
}

// Array Double
// O(n) - One loop, incrementing by 1
function double_all(arr) {
  if (!arr.length) {
    return [];
  }
  return [arr[0] * 2, ...double_all(arr.slice(1))];
}

// Reverse String
// O(n) - One loop, incrementing by 1
function reverseString(str) {
  if (str.length < 2) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

// Triangular Number
// O(n) - One loop, incrementing by 1
function triangle(n) {
  if (n < 2)
    return n;
  return n + triangle(n - 1);
}

// String Splitter
// O(n) - One loop, incrementing by 1
function split(str, sep) {
  let idx = str.indexOf(sep);
  if (idx == -1)
    return [str];
  //you don't have to return an array, you can return a string as an array of
  //character
  //return str;
  return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep));
//all these are valid syntax
//return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
//return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}

// Binary Representation
// O(log(n)) - Loop cuts the number in half each iteration
function convertToBinary(num) {
  if (num>0) {
    let binary = Math.floor(num%2); //save the reminder in binary
    //divide the number by 2 and send that to the function again
    //carry the reminder to the next recursion call
    return (convertToBinary(Math.floor(num/2))+ binary);
  } else {
    return ''; //base case - at some point the divisions will lead to 0
  }
}

// Factorial
// O(n) - One loop, incrementing by 1
function factorial(n) {
  // Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

// Fibonacci
// O(2^n) - Multiple nested loops inside each recursive call
function fibonacci(n) {
  // Base case
  if (n <= 0) {
    return 0;
  }
  // Base case
  if (n <= 2) {
    return 1;
  }
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Anagrams
// O(2^n) - Multiple nested loops inside each recursive call
function anagrams(prefix, str) {
  if (str.length <= 1) {
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for (let i=0; i<str.length; i++) {
      let currentLetter = str.substring(i, i+1);
      let previousLetters = str.substring(0, i);
      let afterLetters = str.substring(i+1);
      anagrams(prefix+currentLetter, previousLetters+afterLetters);
    }
  }
}

//Animal Hierarchy
// O(n^3) - 3 Nested loops
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent)
    .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;
}

// Organization Chart
// O(n^2) - 2 Nested loops
function traverseA(data, depth = 0) {
  let indent = ' '.repeat(depth * 4);
  Object.keys(data).forEach(key => {
    console.log(indent + key);
    traverseA(data[key], depth + 1);
  });
}

function traverseB(node, indent=0) {
  for (let key in node) {
    console.log(' '.repeat(indent), key);
    traverseB(node[key], indent + 4);
  }
}

// Counting Sheep
// O(n) - One loop, incrementing by 1
function countSheepLoop(num) {
  for (let i=num; i>0; i--) {
    console.log(`counting sheeps ${i}`);
  }
}

// Double All
// O(n) - One loop, incrementing by 1
function double_all2(arr) {
  let ret = Array(arr.length);
  for (let i = 0; i < arr.length; ++i) {
    ret[i] = arr[i] * 2;
  }
  return ret;
}

// Reverse Tail
// O(n) - One loop, incrementing by 1 character
function reverse_tail(str) {
  let accumulator = '';
  while (str !== '') {
    accumulator = str[0] + accumulator;
    str = str.slice(1);
  }
  return accumulator;
}

// Triangle
// O(n) - One loop, incrementing by 1
function triangle2(n) {
  let tot = 0;
  for (let i = 1; i <= n; ++i) {
    tot += n;
  }
  return tot;
}

// Split
// O(n) - indexOf only runs once on each character
function split2(str, sep) {
  let ret = [];
  while (true) {
    let idx = str.indexOf(sep);
    if (idx == -1) break;
    ret.push(str.slice(0, idx));
    str = str.slice(idx + sep.length);
  }
  ret.push(str);
  return ret;
}

// Binary Representation
// O(log(n)) - One loop, cuts num in half each time
function convertToBinaryIter(num) {
  let binary = '';
  while (num>0) {
    let rem = Math.floor(num%2);
    binary = rem + binary;
    num = Math.floor(num/2);
  }
  return binary;
}

// Factorial
// O(n) - One loop, incrementing by 1
function factorialIterative(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  return fact;
}

// Fibonacci
// O(n) - One loop, incrementing by 1
function fibonacciIterative(number) {
  let num1 = 1;
  let num2 = 0;
  let fib = null;
  while (number > 0) {
    fib = num1;
    num1 = num1+num2;
    num2 = fib;
    number--;
  }
  return num2;
}
