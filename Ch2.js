/* Write a loop that makes seven calls to console.log to output the following
triangle:

#
##
###
####
#####
######
#######

*/

var hashTag = "#";
for (var num = 0; num < 7; num ++){
  console.log(hashTag);
  hashTag = hashTag + "#";
}

/*
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers
that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers
divisible by only one of those).
*/
for (var num1 = 0; num1 < 100; num1 ++){
  if(((num1 % 3) == 0) && ((num1 % 5) == 0)){
    console.log("FizzBuzz");
  } else if((num1 % 5) == 0){
    console.log("Buzz");
  } else if((num1 % 3) == 0){
    console.log("Fizz");
  } else {
    console.log(num1);
  }
}

/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a
space or a “#” character. The characters should form a chess board.

Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a
space or a “#” character. The characters should form a chess board.
*/

var size = 8; // size of board
var str = "";
var newLine = 0;
for (var num = 1; num <= (size * size); num ++){
  if(newLine % 2 == 0){
    if(num % 2 == 0){
     str = str + "#";
    } else {
      str = str + " ";
    }
  } else {
    if(num % 2 == 0){
     str = str + " ";
    } else {
      str = str + "#";
    }
  }
  if(num % size == 0){
    str = str + "\n";
    newLine ++;
  }
}
console.log(str);
