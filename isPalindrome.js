const truePalindromeNum = 121;
const falsePalindromeNegNum = -121;
const falsePalindromeNum = 10;


// const isPalindrome = num => {
 
//   const reversedNum = parseInt(num.toString().split("").reverse().join(""));

//   if (num === reversedNum) {
//     return true;
//   } else {
//     return false;
//   }
// };

const isPalindrome = num => {
    const numSplit = num.toString().split("")
 
    const reversedNum = parseInt([...numSplit].reverse().join(""), 10);
        return num === reversedNum;
    
};

console.log("true", isPalindrome(truePalindromeNum));
console.log("false", isPalindrome(falsePalindromeNegNum));
console.log("false", isPalindrome(falsePalindromeNum));

const num = 123;
const numToString = num.toString(); // "123"
const numSplit = numToString.split(""); // [ '1', '2', '3' ]
const reversedNum = numSplit.reverse(); // [ '3', '2', '1' ]
const numJoined = reversedNum.join(""); // "321"