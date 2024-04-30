function prime(number) {
    if (number <= 1)
     return false;
    for (var i = 2; i <= number - 1; i++)

    if (number % i == 0) return number+' it is not prime';

    return number+ ' it is prime';
}
console.log(prime(4));