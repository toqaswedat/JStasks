   /*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."
Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(job="",geoloc="",partner="",kids=0){
  console.log(`You will be ${job} in ${geoloc}, and married to ${partner} with ${kids} kids.`);
}
// tellFortune('software engineer', 'Jordan', 'Alice', 3);
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"
Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(age=0){
  dogAge=age*7;
  console.log(`Your doggie is ${dogAge} years old in dog years!`)
}
// calculateDogAge(1);
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"
Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age=0,amount=0){
  console.log(`You will need ${365*(100-age)*amount} cups of tea to last you until the ripe old age of 100`);
}
// calculateSupply(30,3);
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name
Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name=""){
  return `Hello ${name}`;
}
// console.log(greet("zaid"));
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
function double(7) {
  return 2 * 7;
}
function double('7') {
  return 2 * 'x';
}
*/

//in 1st example 'x' is not degined
//in 2nd example the function will always return 14
//in 3rd example wrong way to pass parameter

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}
functiondouble2 x)
return 2 * x;
}
function (x) double3 {
  return 2 * x;
*/

//1st function
function double1(x) {
  return 2 * x ;
}
//2nd function
function double2 (x){
return 2 * x;
}
//3rd function
function double3(x){
  return 2 * x;
}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number
Ex: cube(4)
=> 64
*/
function cube(num=0){
  return Math.pow(num,3);
}
// console.log(cube(4));
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers
Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(x1=0,x2=0){
  return x1*x2;
}
// console.log(multiply(3,4));
// console.log(multiply(5,4));

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"
Ex: canIGetADrivingLicense(21)
=> "yes you can"
Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"
Ex: canIGetADrivingLicense(20)
=> "yes you can"
*/

function canIGetADrivingLicense(age=0){
  if(age>=20)
    return "yes you can";
  else
    return `please come back after ${20-age} years to get one`;
}
// console.log(canIGetADrivingLicense(17));
// console.log(canIGetADrivingLicense(20));

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.
**hint: how we can know string length   Ex: : "tree".length   => 4
Ex: sameLength("tree","clue")
=> true
Ex: sameLength("tree","car")
=> false
*/
function sameLength(string1="",string2=""){
  if(string1.length==string2.length)
    return true;
  else
    return false;
}
// console.log(sameLength("tree","clue"));
// console.log(sameLength("tree","cat"));
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers
Ex: largerNubmer(5,6)
=> 6
Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(x=0,y=0){
  if(x>y) return x;
  else if(y>x) return y;
  else return "Equal";
}
// console.log(largerNubmer(5,3));
// console.log(largerNubmer(5,6));
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number
Ex: smallerNubmer(8,6,7)
=> 6
Ex: smallerNubmer(5,99,34)
=> 5
Ex: smallerNubmer(5,99,3)
=> 3
Ex: smallerNubmer(5,3,3)
=> 3
*/
function smallerNubmer(x=0,y=0,z=0){
  let arr=[x,y,z];
  let min=x;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<min)
      min=arr[i];
  }
  return min;
}
// console.log(smallerNubmer(5,99,34));
// console.log(smallerNubmer(5,3,3));
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string
Ex: shorterString("air","school","car","by","github")
=> by
Ex: shorterString("air","tr","car","by","github")
=> tr
Ex: shorterString("by","tr","car","air","github")
=> by
Ex: shorterString("air","by","car","school","github")
=> by
Ex: shorterString("air","tr","by","car","github")
=> by
Ex: shorterString("air","tr","car","github","by")
=> by
*/
function shorterString(x1="",x2="",x3="",x4="",x5=""){
  let arr=[x1,x2,x3,x4,x5];
  let short=arr[0];
  for(let i=0;i<arr.length;i++){
    if(arr[i].length<short.length)
      short=arr[i];
  }
  return short;
}
// console.log(shorterString("air","school","car","by","github"));
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string
Ex: longerString("air","school","car","github")
=> school
Ex: longerString("air","schoo","car","github")
=> github
try all the cases (change the order of the longestString)
*/
function longerString(x1="",x2="",x3="",x4=""){
  let arr=[x1,x2,x3,x4];
  let long=arr[0];
  for(let i=0;i<arr.length;i++){
    if(arr[i].length>long.length)
      long=arr[i];
  }
  return long;
}
// console.log(longerString("air","school","car","github"));
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd
Ex: isEven(1)
=> false
Ex: isEven(2)
=> true
*/
function isEven(num=1){
  if(num%2==0)
    return true;
  else
    return false;
}
// console.log(isEven(2));
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even
Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true
*/
function isOdd(num=1){
  if(num%2==1)
    return true;
  else
    return false;
}
// console.log(isOdd(5));
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed
Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5
*/
function positive(num=0){
  if(num<0) return -1*num;
  else return num;
}
// console.log(positive(-5));
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.
Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(fname="",lnmae=""){
  return fname+" "+lnmae
}
// console.log(fullName("Adam","McCallen"));
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.
Ex: average(1,2,3,4,5)
=> 3
Ex: average(5,7,9,3,5)
=> 5.8
*/
function average(x1=0,x2=0,x3=0,x4=0,x5=0){
  let arr=[x1,x2,x3,x4,x5];
  let result=0;
  for(let i=0;i<arr.length;i++)
    result+=arr[i];
  return result/arr.length;
}
// console.log(average(5,7,9,3,5));
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN
Ex: randomNumber()
=> 0.2278
Ex: randomNumber()
=> 0.475
*/
function randomNumber(){
  return Math.random();
}
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN
Ex: randomBetweenNumbers(1,8)
=> 7.5412
Ex: randomBetweenNumbers(3,100)
=> 23
*/
function randomBetweenNumbers(x1=0,x2=0){
  return (Math.random()*(x2-x1)+x1);
}
// console.log(randomBetweenNumbers(1,8));
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49
Ex: scoreInUniversty(96)
=> "A"
Ex: scoreInUniversty(3)
=> "F"
Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(num=0){
  if(num>=95 && num<=100) return 'A';
  else if(num>=85 && num<=94) return 'B';
  else if(num>=70 && num<=84) return 'C';
  else if(num>=50 && num<=69) return 'D';
  else if(num>=0 && num<=49) return 'F';
  else return "Wrong number";
}
// console.log(scoreInUniversty(96));
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
*/
let x_counter=0;
function counter(){
  return x_counter++;
}
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
Ex: resetCounter()
=> 3 and the counter reset now
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: resetCounter()
=> 2 and the counter reset now
Ex: counter()
=> 1
*/
function resetCounter(){
  let prev_counter=--x_counter;
  x_counter=0;
  return `${prev_counter} and the counter reset now`;
}