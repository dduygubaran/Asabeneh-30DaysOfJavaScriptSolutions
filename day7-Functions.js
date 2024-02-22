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

// 4- ) Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    let date = new Date();
    let day = date.getDate()
    let month = date.getMonth();
    let year  = date.getFullYear();
    let hour = date.getHours()
    let minutes = date.getMinutes(); 
    console.log(day + '/' + month+1 + '/' + year + ' ' +hour +':' + minutes )
}
showDateTime()

// 5-) Declare a function name swapValues. This function swaps value of x to y.
function swapValues(a,b) {
    let x = b;
    let y = a;
    console.log(x+ ','+y)
}
swapValues(3,5)

/* 6-) Declare a function name reverseArray. 
It takes array as a parameter and it returns the reverse of the array (don't use method). */
function reverseArray(arr) {
    let array = []
    for(let i=0; i<arr.length; i++ ){
        array.unshift(arr[i])
    }
    console.log(array)
}
reverseArray([1,5,7]);

/* 7-) Declare a function name capitalizeArray. 
It takes array as a parameter and it returns the - capitalizedarray. */
function capitalizeArray(arrX) {
        let arrY = [];
    for(let i=0; i<arrX.length; i++) {
        arrY.push(arrX[i].toUpperCase())
    }
    console.log(arrY);
}
capitalizeArray(['turkiye', 'canada', 'japan']);

// 8-) Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(arrD) {
    let arrB = []
    for(let i=0; i<arrD.length; i++) {
        arrB.push(arrD[i]);
    }
    console.log(arrB)
}
addItem(['ceren' , 100, 21, 'seç'])

// 9-) Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index) {
    let items = ['erkan', 'duygu']
    items.splice(index,1)
    console.log(items);
}
removeItem(0)

// 10-14) Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(...args) {
    let sum = 0;
    args.forEach(function (arg) {
        sum += arg
    })
    console.log(sum)
}
sumOfNumbers(1,6,11,2)

// 11-) Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(...args) {
    let sum = 0;
    args.forEach(function (arg) {
        if(arg % 2== 1)
        sum += arg
    })
    console.log(sum)
}
sumOfOdds(1,6,11,2,5)

// 12-) Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(...args) {
    let sum = 0;
    args.forEach(function (arg) {
        if(arg % 2== 0)
        sum += arg
    })
    console.log(sum)
}
sumOfEven(1,6,11,2,5,16)

/* 13-) Declare a function name evensAndOdds .
 It takes a positive integer as parameter and it counts number of evens and odds in the number. */
 function evensAndOdds(number) {
    let evenNumber = 0;
    let oddNumber = 0;
        for(let i=0; i<= number; i++) {
            if(i % 2 == 0){
                evenNumber++;
            }else if( i % 2==1) {
                oddNumber++;
            }
        }
        console.log('Even: ' + evenNumber)
        console.log('Odd: ' + oddNumber)

}
evensAndOdds(100)

// 15-) Write a function which generates a randomUserIp.
function randomUserIp() {
    let abc = [];
    for(let i=0; i<4; i++) {
       let x  = (Math.random() * 201).toFixed();
       abc.push(x)
    }
    console.log(abc)
    console.log('IP: ' + abc.join('.'))
}
randomUserIp();

/* 16-) Write a function which generates a randomMacAddress */
function genMAC(){
    var hexDigits = "0123456789ABCDEF";
    var macAddress = "";
    for (var i = 0; i < 6; i++) {
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));   
        if (i != 5) macAddress += ":";
    }
    console.log('MAC: '+ macAddress);
}
genMAC()

/* 17-) Declare a function name randomHexaNumberGenerator.
 When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.*/
function randomHexaNumberGenerator(){
    let ddd = []
    var hexDigits = "0123456789ABCDEFGHI#";
    for (var i = 0; i < 7; i++) {
        let x =hexDigits.charAt(Math.round(Math.random() * 15)); 
        ddd.push(x)
    }
    console.log(ddd);
    console.log('Random HexaNumber: ' + ddd.join(''))
}
randomHexaNumberGenerator()

/* 18-) Declare a function name userIdGenerator. When this function is called it generates seven character id. 
The function return the id.*/
function userIdGenerator(){
    let ddd = []
    var idGenerator = "ABCDEFGHIJKLMNOPRSTUVYZXWQ0123456789abcdefghijklmnoprstuvyzxwq";
    for (let i = 0; i < 7; i++) {
        let x = idGenerator[Math.floor(Math.random() * idGenerator.length)];
        ddd.push(x)
    }
    console.log(ddd);
    console.log('User ID Generator: ' + ddd.join(''))
}
userIdGenerator()

// Exercises: Level 3;
