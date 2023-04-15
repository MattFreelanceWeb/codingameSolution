/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(" ");
for (let i = 0; i < n; i++) {
  const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
}

function closestToZero(arr) {
  // check if it's an array
  if (!Array.isArray(arr)) {
    return "invalid, please give an Array to this function ";
  }

  // if array is empty
  if (arr.length === 0) {
    return "nothing here.";
  }

  // intialise the closest temp variable
  let closestTemp = arr[0];

  // check the array to find wich temperature is the closest to zero
  for (let i = 1; i < arr.length; i++) {
    if (
      Math.abs(arr[i]) < Math.abs(closestTemp) ||
      (Math.abs(arr[i]) === Math.abs(closestTemp) && arr[i] > closestTemp)
    ) {
      closestTemp = arr[i];
    }
  }

  if (!closestTemp) {
    closestTemp = 0;
  }

  return closestTemp;
}

// to understand conditions : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

// to understand for loop:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

console.log(closestToZero(inputs));
