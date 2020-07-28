const intList = [1, 3, 6, 32, 53436, 522235, 57765, 4920149199525];

console.log(`Given ... ${intList}`);
let fizzBuzzList = intList.map(number => {
  var value = '';
  if (number % 3 === 0) {
    value = 'Fizz';
  }
  if (number % 5 === 0) {
    value += 'Buzz';
  }
  value = value || number;
  return value;
});
console.log(`Then ... ${fizzBuzzList}`);
