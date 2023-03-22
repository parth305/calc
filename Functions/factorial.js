function Factorial(param) {
  let fact = 1;
  for (let i = 1; i <= param; i++) {
    fact *= i;
  }
  return fact;
}
