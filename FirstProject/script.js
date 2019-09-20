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
/*
var firstName = 'John';
var age = 14;

age >= 18 ? console.log(firstName + 'drinks beer.') : console.log(firstName + 'drinks juice');
 var drink = age >= 18 ? 'beer' : 'juice';

 //Switch case
 var job = 'instructor';
 switch(job)
 {
     case 'teacher':
            console.log(firstName + 'teacher kids how to code.');
            break;
     case 'instructor':
            console.log(firstName + 'is instructor.');
             break;
     case 'driver': 
             console.log(firstName + 'drives an uber in lisbon.');
              break;  
     case 'designer':
             console.log(firstName + 'designs beautiful websites.');
              break;
     default:
            console.log(firstName + 'does somethings else.');
                    
 }

 switch (true){
     case age < 13:
            console.log(firstName + 'is a boy.');
            break;
     case age >= 13 && age < 20:
            console.log(firstName + 'is a teenager.');
            break;
     case age >= 20 && age < 30:
            console.log(firstName + 'is a young.');
            break; 
      default:
            console.log(firstName + 'is a man.');
                    
 }

 function calculateAge(birthYear)
 {
     return 2018-birthYear;
 }
 var ageJohn = calculateAge(1998);
 var ageMike = calculateAge(1998);
 var ageJone = calculateAge(1998);
 console.log(ageJohn, ageMike,  ageJone);

 function yearUtilRetirement(year, firstName)
 {
 var age = calculateAge(year);
 var retirement = 65 - age;

 if(retirement > 0)
 {
     console.log(firstName + 'retires in' + retirement + 'years.');
 }
 else{
     console.log(firstName + 'retires in '+ retirement +'years.');
    }
 }

 yearUtilRetirement(1990, 'John');
 yearUtilRetirement(1948, 'Mike');
 yearUtilRetirement(1990, 'Jone');
*/


 /* ***********************************
 *Fuction Statement and Expretions
 */
/*
var whatDoYouDo = function(job, firstName)
{
    switch(job)
    {
        case 'teacher':
            return firstName + 'teaches kids how to code';
          
        case 'driver': 
        return firstName + 'drives a cab in lisbon'; 
        
           
        case 'designer': 
        return firstName + 'designs beautiful websites'; 

        default:
        return firstName + ' does something';
    }
}

console.log(whatDoYouDo('teacher' , 'John'));
console.log(whatDoYouDo('designer' , 'Jone'));
console.log(whatDoYouDo('retired' , 'Mark'));

*/

/****************** 
*Arrays
*/
/** 
var names = ['john', 'Mark', 'jone'];
var year = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

//Mutate array data
names[1] = 'ben';
names[names.length] = 'Mary'
console.log(names);

//different data type
var john = ['John', 'smith', 1990, 'teacher', false];
john.push('blue');
john.unshift('mr');
console.log(john);

john.pop();
john.pop();
john.shift();

console.log(john);
console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'john is not a designer' : 'john is a designer';
console.log(isDesigner);
*/

/*
*objects and properties 
*/
/** 
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName'])

var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new obeject syntax
var jane = new Object();
jane.name = 'Jane' ;
jane.birthYear = 1969 ;
jane['lastName'] = 'Smith';
console.log(jane);
*/


/*
*objects and methods
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
       // return 2018 - this.birthYear;
       this.age = 2018 - this.birthYear;
    }
};

//console.log(john.calcAge());
john.calcAge();
console.log(john);
*/
/**** loop *******************************
 ************* for loop************
for (var i = 1; i<= 20; i++)
{
    console.log(i);
}

var john = ['john', 'Smith', 1990, 'designer', false];
for(var i = 0; i<john.length; i++)
{
    console.log(john[i]);
}

//while loop
var i = 0;
while(i < john.length)
{
    console.log(john[i]);
    i++
}
 */

//continue and break statement
var john = ['john', 'Smith', 1990, 'designer', false];
for(var i = 0; i<john.length; i++)
{
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i=0; i<john.length; i++)
{
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}

//looping backwards
for (var i = john.length-1; i>=0; i--)
{
    console.log(john[i]);
   
}


