// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2);
}

// Iteration #2: Find longest word
function findLongestWord(arrayWords) {
  let result = '';
  for (let i = 0; i < arrayWords.length; i++) {
    if (arrayWords[i].length > result.length) {
      result = arrayWords[i];
    }
  }
  return result;
}

// Iteration #3: Calculate the sum
function sumNumbers(arrayNumbers) {
  return arrayNumbers.reduce((total, current) => total + current, 0);
}

// Iteration #3.1 Bonus:
function sum(arrayMixed) {
  return arrayMixed.reduce((total, current) => {
    if (typeof current !== 'number' && typeof current !== 'boolean') {
      return total + current.toString().length;
    } else {
      return total + current;
    }
  }, 0);
}

// Iteration #4: Calculate the average
function averageNumbers(arrayNumbers) {
  const sum = arrayNumbers.reduce((total, current) => total + current, 0);
  return sum / arrayNumbers.length;
}

function averageWordLength(arrayWords) {
  const average = arrayWords.reduce((total, current) => total + current.length, 0);
  return average / arrayWords.length;
}

// Bonus - Iteration #4.1
function avg(arrayMixed) {
  const sum = arrayMixed.reduce((total, current) => {
    if (typeof current !== 'number' && typeof current !== 'boolean') {
      return total + current.toString().length;
    } else {
      return total + current;
    }
  }, 0);
  return sum / arrayMixed.length;
}

// Iteration #5: Unique arrays
function uniquifyArray(arrayWords) {
  return arrayWords.filter((word, index) => arrayWords.indexOf(word) === index);
}

// Iteration #6: Find elements
function doesWordExist(arrayWords, wordToSearch) {
  return arrayWords.includes(wordToSearch);
}

// Iteration #7: Count repetition
function howManyTimes(arrayWords, wordToCount) {
  return arrayWords.reduce((count, word) => (word === wordToCount ? count + 1 : count), 0);
}

// Iteration #8: Bonus
function greatestProduct(matrix) {
  let maxProduct = 0;

  // Function to calculate the product of four adjacent numbers in an array
  function calculateProduct(arr) {
    return arr.reduce((acc, num) => acc * num, 1);
  }

  // Check horizontally
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length - 3; j++) {
      const product = calculateProduct(matrix[i].slice(j, j + 4));
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  // Check vertically
  for (let i = 0; i < matrix.length - 3; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const product = calculateProduct([matrix[i][j], matrix[i + 1][j], matrix[i + 2][j], matrix[i + 3][j]]);
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  // Check diagonally (top-left to bottom-right)
  for (let i = 0; i < matrix.length - 3; i++) {
    for (let j = 0; j < matrix[i].length - 3; j++) {
      const product = calculateProduct([
        matrix[i][j],
        matrix[i + 1][j + 1],
        matrix[i + 2][j + 2],
        matrix[i + 3][j + 3]
      ]);
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  // Check diagonally (top-right to bottom-left)
  for (let i = 0; i < matrix.length - 3; i++) {
    for (let j = matrix[i].length - 1; j >= 3; j--) {
      const product = calculateProduct([
        matrix[i][j],
        matrix[i + 1][j - 1],
        matrix[i + 2][j - 2],
        matrix[i + 3][j - 3]
      ]);
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  return maxProduct;
}

// Exporting the functions
module.exports = {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  sum,
  averageNumbers,
  averageWordLength,
  avg,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  greatestProduct
};
