function calculateOperations(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return 'Error: Both inputs must be numbers.';
    }
    const sum = num1 + num2;
    const subs = num1 - num2;
    const mult = num1 * num2;
    if (num2 === 0) {
      return 'Error: div by zero is not allowed.';
    }
    const div = parseFloat((num1 / num2).toFixed(2));
    return `The sum is ${sum}, the subs is ${subs}, the mult is ${mult}, and the div is ${div}.`;
  }
  console.log(calculateOperations(2,4));