    // All the exercises should use while loop:

// Please be sure to conect this file to another HTML file
// to seprate it from the recursion file

// Dont serach on the internet except if it is written in the question

// You should solve all the question by what you understand from the lecture
// and with your pair not solo

// And dont look or use a code that you wrote before 

console.log('Here is : While')

/*
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/
function subtract(n){
    let counter=n;
    let eq=`${n}`;
    while(counter!=0){
        n-=(--counter);
        eq+=`-${counter}`;
    }
    console.log(eq+"="+n);
}
// subtract(9);

/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
function factorial(n){
    let counter=n-1;
    while(counter!=1){
        n*=(counter--);
    }
    console.log(n);
}

/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
function repeatStr(myString,myNum){
    let x=myString;
    myNum--;
    while(myNum!=0){
        myString+=" "+x;
        myNum--;
    }
    console.log(myString);
}

/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
function sum2(x,y){
    let sum=0;
    while(x!=y){
        sum+=(x++);
    }
    sum+=y;
    return sum;
}

/*
5
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the continue condition should be [somthing!== 0]
** Important: You should't have extra space at the end
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/
function repeatStr2(x="",y=""){
    let counter=y.length-1;
    let myString=x;
    while(counter!=0){
        myString+=" "+x;
        counter--;
    }
    return(myString);
}

/*
6
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/
function multiOf(x,y,z){
    return(x*(Math.pow(y,z)));
}

/*
7
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
function muti2(x,y){
    let result=1;
    while(x!=y){
        result*=x;
        x++;
    }
    return result*y;
}
/*
8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/
function numberBetweenUs(x,y){
    let result="";
    if(y-x==2){
        result=y-x;
        return result;
    }
    while(y-x!=1){
        result+=(++x);
        if(y-x!==1){
            result+=", ";
        }
    }
    return result;
}



/*
9
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
let result=[];
function countDown(x){
    result.push(x--);
    if(x==0){
        result.push("done");
        var newx=result.slice();
        result=[];
        console.log(newx.toString());
    }
    else{
        countDown(x);
    }
}



/*
10
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/
function multiplication2(x=0,y=0){
    let counter=0,result=0;
    while(counter!=y){
        result+=x;
        counter++;
    }
    return result;
}



/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
mod2(8,4) => 0
*/
function mod2(a=0,b=0){
    return a%b;
}



/*
12
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/
function repeatChar(x="",y=""){
    x=x.toLowerCase();
    y=y.toLowerCase();
    let counter=0,result=0;
    while(counter!=x.length){
        if(x[counter]==y){
            result++;
        }
        counter++;
    }
    return result;
}

