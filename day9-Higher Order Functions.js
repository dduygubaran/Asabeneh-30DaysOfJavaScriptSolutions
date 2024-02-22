// Exercises: Level 1;

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1-) Explain the difference between forEach, map, filter, and reduce.
/* 
** forEach;
the forEach method takes in an array and execute a function for each element in the array 
** map;
the map method produces a new array from the provided callback function to be executed on each array 
** filter;
this also creates a new array that 
passes the test of the callback function provided
** reduce;
this produces a single value from an array
provided it meets the callback function
*/

// 3-) Use forEach to console.log each country in the countries array.
countries.forEach(country => console.log(country))

// 4-) Use forEach to console.log each name in the names array.
names.forEach(name => console.log(name))

// 5-) Use forEach to console.log each number in the numbers array.
numbers.forEach(num => console.log(num))

// 6-) Use map to create a new array by changing each country to uppercase in the countries array.
countries.map(country => console.log(country.toUpperCase()))

// 7-) Use map to create an array of countries length from countries array.
let length = countries.map(country => {
    return country.length
})
console.log(length)

// 8-) Use map to create a new array by changing each number to square in the numbers array
let squareOfNumbers = numbers.map(num => {
    return  Math.pow(num,2)
})
console.log(squareOfNumbers)

// 9-) Use map to change to each name to uppercase in the names array
let names2 = names.map(name => {
    return name.toUpperCase()
})
console.log(names2)

// 10-) Use map to map the products array to its corresponding prices.
let matchProductPrice = products.map(element=> {
    return `${element.product}: ${element.price}`;
})
console.log(matchProductPrice)

// 11-) Use filter to filter out countries containing land.
console.log(countries.filter(country => country.includes('land')))
 
// 12-) Use filter to filter out countries having six character.
let characterNumber = countries.filter(country => country.length==6)
console.log(characterNumber)

// 13-) Use filter to filter out countries containing six letters and more in the country array.
let moreSixCharacter = countries.filter(country => {
    return country.length >= 6
})
console.log(moreSixCharacter)

// 14-) Use filter to filter out country start with 'E';
withE = countries.filter(country => {
    return country[0]==='E'
})
console.log(withE)

// 15-) Use filter to filter out only prices with values.
let hasPrice = products.filter(element => {
    return element.price != '' && element.price != ' '
}) 
console.log(hasPrice)

// 16-) Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
 function getStringLists(array){
    let fltr = array.filter(element => {
        return typeof element === 'string'
    })
    return fltr;
}
console.log(getStringLists(['derin', 2, 1, 'deniz', 6, 10, 'seçil']))

// 17-) Use reduce to sum all the numbers in the numbers array.
    let sum = numbers.reduce((oldValue,currentValue) => {
        return oldValue + currentValue;
    },0)
    console.log(sum)

/* 18-) Use reduce to concatenate all the countries and to produce this sentence: 
Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries */
let jCountries = countries.reduce((oldValue, currentValue) => {
    return oldValue + ' ' + currentValue;
})
console.log(jCountries);

// 19-) Explain the difference between some and every
/* every;
checks if all elements in an array are similar in all aspects
some;
checks if some elements are elements are similar in one aspect */

// 20-) Use some to check if some names' length greater than seven in names array
let name3 = names.some((name) => name.length >7)
console.log(name3)

// 21-) Use every to check if all the countries contain the word land
let land2 = countries.every((country) => country.includes('land'))
console.log(land2)

// 22-) Explain the difference between find and findIndex.
/* find;
returns the first element which satisfies the condition
findIndex;
returns the first index elemnt whic satisfiy the condition */

// 23-) Use find to find the first country containing only six letters in the countries array
let firstSixChar = countries.find(country => {
    return country.length == 6
});
console.log(firstSixChar);

// 24-) Use findIndex to find the position of the first country containing only six letters in the countries array
let indexs = countries.findIndex(country => {
    return country.length == 6;
})
console.log(indexs)

// 25-) Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
let indexs2 = countries.findIndex(country => {
    return country == 'Norway';
})
console.log(indexs2)

// 26-) Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
let indexs3 = countries.findIndex(country => {
    return country == 'Russia'
})
console.log(indexs3)

// Exercises: Level 2;

// 1-) Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
let totalPrice = products.map(element => {
    return element.price;
}).filter(price => {
    return price != '' && price != ' ';
}).reduce((oldValue, currentValue) => {
    return oldValue + currentValue;
})
console.log(totalPrice);

/* 3-) Declare a function called categorizeCountries which returns an array of countries which have some common pattern
(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')). */
function categorizeCountry (countries) {
    let abc = countries.filter(country => {
        return country.includes('land')  || country.includes('ia') || country.includes('island') || country.includes('stan') 
    })
    return abc;
}
console.log(categorizeCountry(countries))

/* 5-) Declare a getFirstTenCountries function and return an array of ten countries. 
Use different functional programming to work on the countries.js array */
function getFirstTenCountries(countries) {
    let arr = [];
     arr = countries.map(country => {
        return country;
    })
    return arr; 
}
console.log(getFirstTenCountries(countries))

// Exercises: Level 3;
