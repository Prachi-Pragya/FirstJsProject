//console.log('calling external javascript file');
/*
//variables and datatypes

var firstName="prachi";
console.log(firstName);
var lastName="pragya";
console.log(lastName);
var age =28;

 var fullage=true;
console.log(fullage);

var job;
console.log(job);
job='teacher';
console.log('job');

var _3years = 3;
//var if = 23 ;
*/

/************************* 
**varables mutations and types coercion
var firstName="riya";
var age =28;
*/

/*
// type coercion
console.log(firstName + ' ' + age);

var job, ismarried;
job = 'teacher';
var ismarried =false;
console.log(firstName +' is a ' + age +' year old ' 
+job+' is married ?'+ ismarried);

//variable mutation
age = 'twenty eight';
job = 'software tester';

alert(firstName +' is a ' + age +' year old ' +job+' Is she married ?'+ ismarried);

var lastName = prompt('What is his last Name?');
console.log(firstName+ ' ' +lastName);
 */

 /**********
  *Basic operators
  * */

/*
  //Math operator 
var year = 2020;
var yearJohn = year - 28;
var yearMark = year - 33;

console.log(yearJohn);
console.log(year + 5);

//logical operators
var yearJhon, yearMark;
now = 2010;
ageJohn = 28;
ageMark = 33;
yearJohn=now-ageJohn;
yearMark = now- ageMark;
console.log(yearJohn);
console.log(now + 2);
console.log(now*2);
console.log(now/10);

var JohnOlder = ageJohn < ageMark;
console.log(JohnOlder);

//type of operators
console.log(typeof JohnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than john');

//Operators procedence 
var now = 2018;
var yearJhon = 1988;
var fullAge = 18;
//multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignment
x = (3+5) * 4 -6;
console.log(x);
*/

/*********
 * If / else statement
 */ 
/*
var firstName = 'John';
var civilStatus = 'single';
var age = 16;

if(civilStatus === 'single')
{
    console.log(firstName + 'ismarried');
}
else{
    console.log(firstName +' '+ 'will hopefully mary soon:');
}


var isMarried = false;
if (isMarried)
{
    console.log(firstName + 'is married');
}
else{
    console.log(firstName+' will hopefully mary soon:');
}

if(age < 13)
{
    console.log(firstName+ " is a boy");
}
else if(age >= 13 && age <20)
{
    console.log(firstName+' is a teenager');
}
else if(age >= 20 && age < 30)
{
    console.log(firstName+'is a man')
}
else{
    console.log(firstName + 'is a man');
}
*/
/*************** 
*Ternary operator*/
var firstName = 'John';
var age = 14;

age >= 18 ? console.log(firstName + 'drinks beer.') : console.log(firstName + 'drinks juice');
 var drink = age >= 18 ? 'beer' : 'juice';







