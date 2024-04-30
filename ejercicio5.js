function factorial(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
      return 'Error: The input must be a non-negative integer.';
    }
  
    if (n === 0 || n === 1) {
      return 1;
    }
  
    let result = n;
  
    while (n > 1) {
      n--;
      result *= n;
    }
  
    return result;
  }
  console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(1));