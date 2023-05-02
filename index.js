function hasTargetSum(array, target) {
  // Write your algorithm here
} // 1) create an empty object called "container"
  // 2) for each number 'num' in the array ;; it loops through all elements individually
  // 3) add each element in the array to every other individual element in the array
  // 4) the result is stored in the empty object "container"
  // 5) the result in the "container" is then compaired to the target number, if it matches, it returns true.
  // 6) if the result doesnt match, or doesnt find a matching pair, returns false

/* 
  Write the Big O time complexity of your function here

  the Big O time complexity function is O(n), the "n" is the length of the input array. the 
  function iterates over the array once performing a constant-time operation, which is checking
  if a matching pair exists in the object; for each element in the array.
*/


  //Add your pseudocode here

  function hasTargetSum(array, target) {
  // create an empty object called "container"
  let container = {};
  
  // loop through all elements in the array
  for (let i = 0; i < array.length; i++) {
    
    // for each element, loop through all other elements in the array
    for (let j = i + 1; j < array.length; j++) {
      
      // add the current element and the other element
      let sum = array[i] + array[j];
      
      // store the sum in the container object
      container[sum] = true;
      
      // check if the current sum matches the target
      if (sum === target) {
        return true;
      }
    }
  }
  
  // if no matching sum is found, return false
  return false;
}

/*
  Add written explanation of your solution here
  // the function takes an array and a target integer as arguments and returns a boolean value
  // the array is a reference to the array passed in as an argument
  // the function initializes an empty object called "container", which then iterates through each 
  'num' in the array. for each element, loops through all other elements in the array, adding
  the current element and the other element.
  //the sum is then stored in the "container" object
  //if the current sum matches the target it returns true, if no matching is found, returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
