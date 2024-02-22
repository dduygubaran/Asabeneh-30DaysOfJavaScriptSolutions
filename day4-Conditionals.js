
// Exercises: Level 1;

/* 1-) Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:
'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.*/
let age = prompt("Enter your age: ");
let difference = Math.abs(Number(age)- Number(18));

if(age > 18) {
    console.log('You are old enough to drive');
} 
else {
    console.log(`You are left with ${difference}  years old`)
}

/*2-) Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result 
to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.*/ 
let myAge = 27;
let yourAge = prompt('Enter your age: ');
let dif = Math.abs(Number(myAge)-Number(yourAge));
if(myAge > yourAge) {
    console.log(`I am ${dif} years older than you.`)
} 
else {
    console.log(`You are ${dif} years older than me.`)
}

/*3-) If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
    a-) using if else */
let a = prompt('Enter first number: ');
let b = prompt('Enter second number ');;

if(Number(a) > Number(b)) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`)
}
// b-) ternary operator.
a > b ? console.log(`${a} is greater than ${b}`)
      : console.log(`${a} is less than ${b}`)

/* 4-) Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? */
let number = prompt('Enter your number: ')
if(Number(number) % 2 == 0) {
    console.log(`${number} is a even number`)
} else {
    console.log(`${number} is a odd number`)
}

// Exercises: Level 2;

 /* 1-)Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */ 
let noteValue = prompt('Enter lesson score: ')
if(noteValue < 0 || noteValue > 100) {
    alert('Enter a valid score!')
}
else if(noteValue > 80 && noteValue<100) {
    alert('Your note is: A')
} else if(noteValue>70 && noteValue<89) {
    alert('Your note is: B')
} else if(noteValue>60 && noteValue<69) {
    alert('Your note is: C')
}else if(noteValue>50 && noteValue<59) {
    alert('Your note is: D')
}else {
    alert('Your note is: F')  
}

/* 2-) Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */
let valueSeason = prompt('Enter a month')
let valueSeason1 = valueSeason.toUpperCase();
if(valueSeason1 == 'SEPTEMBER' || valueSeason1 == 'OCTOBER' || valueSeason1 == 'NOVEMBER') {
    alert('The season is Autumn')
}else if(valueSeason1 == 'DECEMBER' || valueSeason1 =='JANUARY' || valueSeason1 == 'FEBRUARY') {
    alert('The season is Winter')
}else if(valueSeason1 == 'MARCH' || valueSeason1 =='APRIL' || valueSeason1 == 'MAY') {
    alert('The season is Spring')
}else if(valueSeason1 == 'JUNE' || valueSeason1 == 'JULY' || valueSeason1 == 'AUGUST') {
    alert('The season is Summer')
} else {
    alert('Please a valid month!')
}

/* 3-) Check if a day is weekend day or a working day. Your script will take day as an input. */
 let day = prompt('Enter a day') 
 let day1 = day.toUpperCase();
 if(day1=='SATURDAY' || day1=='SUNDAY') {
    alert(`${day1} is a weekend.`);
 } else if(day1=='MONDAY' || day1=='TUESDAY'||  day1=='WEDNESDAY' || day1=='THURSDAY' || day1=='FRIDAY') {
    alert(`${day1} is a working day.`);
 } else {
    alert('Please a valid day!');
 }

// Exercises: Level 3;