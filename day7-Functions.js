// Exercises: Level 1;

// 1-) Declare a function fullName and it print out your full name.
function fullName(firstname) {
 console.log(`Merhaba ben ${firstname}`);
}
fullName("Duygu");

// 2-) Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function FullName(fName, lName) {
    return `Merhaba ben ${fName} ${lName}`;
}
console.log(FullName('Duygu', 'Baran'));

// 3-) Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(value1, value2) {
    let sum = value1 + value2;
    console.log('Sum: ' + sum);
}
addNumbers(2,6);

// 4-) An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
console.log('Area: ' + areaOfRectangle(2,5));

// 5-) A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width)
    console.log('Perimeter: ' + perimeter)
}
perimeterOfRectangle(8,2);

// 6-) A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height;
    return volume;
}
console.log('Volume: ' + volumeOfRectPrism(2,5,6));

// 7-) Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCirlce(r) {
    const  PI = 3.14
    let area = PI * Math.pow(r,2)
    console.log('Area Of Circle: ' + area)
}
areaOfCirlce(5);

// 8-) Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
    const PI = 3.14;
    circumOfCircle = (2* PI * r).toFixed(2); 
    return circumOfCircle; 
}
console.log('Circumference: ' + circumOfCircle(5))

// 9-) Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
    let density = (mass / volume).toFixed(2);
    console.log('Density: ' + density);
}
density(47,6)

/* 10-) Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
Write a function which calculates a speed of a moving object, speed. */
function speedOfObject(roadDistance, time) {
    let speed = roadDistance / time;
    console.log('Speed Of Object: ' + speed);
}
speedOfObject(100,5)

// 11-) Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weightOfObject(mass) {
    const GRAVITY = 9.8;
    let weight = (mass * GRAVITY).toFixed(2);
    return weight;
}
console.log('Weight Of Object: ' + weightOfObject(7))

/* 12-) Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
Write a function which convert oC to oF convertCelsiusToFahrenheit. */
function convertCelsiusToFahrenheit(Celsius) {
    let fahrenheit = (Celsius * 9 / 5) + 32;
    return fahrenheit;
}
console.log('Convert Result: ' + convertCelsiusToFahrenheit(100))

/* 13-) Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
BMI is used to broadly define different weight groups in adults 20 years old or older.
Check if a person is underweight, normal, overweight or obese based the information given below. 
The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */ 

function BMI() {
    let weight = prompt('Enter your weight: ');
    let height = prompt('Enter your height: ');
    let bmi = weight / (Math.pow(height, 2))
    console.log('BIM: '  + bmi.toFixed(2));
    if(bmi < 18.5 ) {
        console.log('You are UNDERWEIGHT')
        alert('UNDERWEIGHT')
    } else if(bmi>18.5 && bmi<24.9) {
        console.log('You are NORMAL WEIGHT')
        alert('NORMAL WEIGHT')
    } else if(bmi>25 && bmi<29.9) {
        console.log('You are OVERWEIGHT')
        alert('OVERWEIGHT')
    } else {
        console.log('You are OBESE')
        alert('OBESE')
    }
}
BMI()

// 14-) Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason() {
    let answer = prompt('Enter a valid month: ')
    if(answer == 'December' || answer == 'January' || answer == 'February') {
       console.log('WINTER')
       alert('WINTER')
    }
    else if(answer == 'March' || answer == 'April' || answer == 'May') {
        console.log('SPRING')
        alert('SPRING')
    }
    else if(answer == 'Jun' || answer == 'July' || answer == 'August') {
        console.log('SUMMER')
        alert('SUMMER')
    }
    else if(answer == 'September' || answer == 'October' || answer == 'November') {
        console.log('AUTUMN')
        alert('AUTUMN')
    }
    else {
        console.log('Please enter a valid month');
        alert('Please enter a valid month')
    }
}
checkSeason();

/* 15-)  Math.max returns its largest argument.
Write a function findMax that takes three arguments and returns their maximum with out using Math.max method. */
function findMax() {
    max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max)
        max = arguments[i]
      } 
      return max;
  }
console.log(findMax(0, 10, 5))
console.log(findMax(-7, -10, -9))

// Exercises: Level 2;

// Exercises: Level 3;
  
