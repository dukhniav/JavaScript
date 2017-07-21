/* Write a function min that takes two arguments and returns their minimum. */
function min(a, b){
 if(a < b){
   return a;
 } else {
   return b;
 }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/*
We’ve seen that % (the remainder operator) can be used to test whether a number
is even or odd by using % 2 to check whether it’s divisible by two.
Here’s another way to define whether a positive whole number is even or odd:

 Zero is even.
 One is odd.
 For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function
should accept a number parameter and return a Boolean.
*/

function isEven(a){
 if(a == 1)
   return false;
 else if(a == 0)
   return true;
 else {
   return isEven(a - 2);
 }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

/*
You can get the Nth character, or letter, from a string by writing "string".charAt(N),
similar to how you get its length with "s".length. The returned value will be a
string containing only one character (for example, "b"). The first character has
position zero, which causes the last one to be found at position string.length - 1.
In other words, a two-character string has length 2, and its characters have positions
0 and 1.

Write a function countBs that takes a string as its only argument and returns a
number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes
a second argument that indicates the character that is to be counted (rather than
counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

function countBs(a){
  var count = 0;
  for(var num = 0; num < a.length; num++){
    if(a.charAt(num) == "B")
      count++;
  }
  return count;
}

function countChar(a, b){
  var count = 0;
  for(var num = 0; num < a.length; num++){
    if(a.charAt(num) == b)
      count++;
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
