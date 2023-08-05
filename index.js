function isPalindrome(word) {
  // Write your algorithm here
  let j= word.length;
  for(let i=0; i<j/2; i++){
    let start= word[i];
    let end = word[j-1];
    if(start != end){
      return false;
    }else {
      return true;
    }
  }

}

/* 
  Add your pseudocode here

  - Mom ** o is the center, so compare m and m (they match)
  -abbba ** b is the center, compare a and a, then compare second b to second last b(they match)
  - robot ** compare r and t (they do not match, so obviously not a palindrome)
*/

/*
  Add written explanation of your solution here
  for a word that is a palindrome, the fist half of the word is exacly the same as the reversed other half of the word.
  variable i will go through the word halfway index by index and compare the first index to the last index, second index to second last index etc and give a return.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
