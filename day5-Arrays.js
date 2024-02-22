//Exercises: Level 1;

/* 1-) Declare an empty array*/
let arr = [];

/* 2-) Declare an array with more than 5 number of elements*/
let arr1 = [1, 9, 'duygu', 9, 5, 'baran']

/* 3-) Find the length of your array*/
console.log('Array uzunluk: ' + arr1.length)

/* 4-) Get the first item, the middle item and the last item of the array*/
// a-)
console.log(arr1[0]);
// b-)
let mediumValue = arr1.length/2
console.log(arr1[mediumValue])
// c-)
console.log(arr1[arr1.length-1])

/* 5-) Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5*/
let mixedDataTypes = ['String', 10, 'Number', [], [1,9,17], 'Sonuncu', 1995, 'Kitap']
console.log(mixedDataTypes.length)

/* 6-) Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon*/
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

/* 7-) Print the array using console.log()*/
console.log(itCompanies)

/* 8-) Print the number of companies in the array*/
console.log(itCompanies.length)

/* 9-) Print the first company, middle and last company*/
// a-)
console.log(itCompanies[0])
// b-)
let mediumValue2 = Math.floor(itCompanies.length/2)
console.log(itCompanies[mediumValue2])
// c-)
console.log(itCompanies[itCompanies.length-1])

/* 10-) Print out each company*/ 
console.log(itCompanies[0] + ' ' +itCompanies[1] + ' ' + itCompanies[2] + ' ' + itCompanies[3] + ' ' + itCompanies[4] + ' ' + itCompanies[5] + ' ' + itCompanies[6])

/* 11-) Change each company name to uppercase one by one and print them out */
console.log(itCompanies[0].toUpperCase() + ' ' +itCompanies[1].toUpperCase() + ' ' + itCompanies[2].toUpperCase() + ' ' + itCompanies[3].toUpperCase() + ' ' + 
itCompanies[4].toUpperCase() + ' ' + itCompanies[5].toUpperCase() + ' ' + itCompanies[6].toUpperCase() ) //devam

/* 12-) Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. */
let sentence = "Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies"
let sentenceArr = sentence.split(",")
console.log("12-"+sentenceArr)

/* 13-) Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found*/
let sentenceArr1= sentence.split(", ")
console.log(sentenceArr1)
let index = sentenceArr1.indexOf('IBM')
console.log(index)
if(index === -1) {
    console.log('This company does not exist in the array')  
}else {
    console.log('This company exists in the array: ' + sentenceArr1[index])
}

/* 15-) Sort the array using sort() method*/
let sorting = itCompanies.sort()
console.log(sorting)

/* 16-) Reverse the array using reverse() method*/
console.log(itCompanies.reverse())

/* 17-) Slice out the first 3 companies from the array*/
console.log(itCompanies)
itCompanies.shift();
itCompanies.shift();
itCompanies.shift();
console.log(itCompanies)

/*18-) Slice out the last 3 companies from the array*/
itCompanies.pop();
itCompanies.pop();
itCompanies.pop();
console.log(itCompanies)

/* 20-) Remove the first IT company from the array*/
itCompanies.shift()
console.log(itCompanies)

/* 22-) Remove the last IT company from the array */
itCompanies.pop()
console.log(itCompanies)

/* 23-) Remove all IT companies */
itCompanies.pop()
itCompanies.pop()
itCompanies.pop()
itCompanies.pop()
itCompanies.pop()
console.log(itCompanies)

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)

// Exercise: Level 2;

// 2-) First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people.I teach HTML, CSS, JS, React, Python.'
let text0 = text.split('.')
console.log(text0)

let text1 = text0[0].split(' ')
console.log(text1) //6

let text2 = text0[1].split(',')
console.log(text2)

let text3 = text2[0].split(' ') 
console.log(text3)

let total =text1.length +text2.length-1 + text3.length
console.log(total)

// 3-) In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// a-)
let index = shoppingCart.indexOf('Meat')
if(index === -1) {
console.log('Meat does not exist in  array')
shoppingCart.unshift('Meat')
console.log('Meat is added in  array')
console.log(shoppingCart)
} else {
    console.log('Meat exists in  array') 
}
// b-)
let index2 = shoppingCart.indexOf('Sugar')
if(index2 === -1) {
    console.log('Sugar does not exist in  array')
    shoppingCart.push('Sugar')
    console.log('Sugar is added in  array') 
    console.log(shoppingCart)
} else {
    console.log('Sugar exists in  array') 
}
// c-)
let answer = prompt('Have you allergic to honey?')

if(answer == 'yes') {
    let index3 = shoppingCart.indexOf('Honey')
    console.log(index3)
    shoppingCart.splice(index3,1)
    console.log(shoppingCart)
} else {
    console.log(shoppingCart)
}
// d-)
let index4 = shoppingCart.indexOf('Tea')
shoppingCart[index4] = 'Green Tea'
console.log(shoppingCart)

/* 4-) In countries array check
 if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.*/
let countries = ['England', 'Poland', 'Turkey', 'Ethiopia', 'Sweden', 'New Zeland']
let isHas = countries.indexOf('Ethiopia')
console.log(isHas)
if(isHas === -1 ){
    countries.push('Ethiopia')
    console.log(countries)
} else {
   let h = countries[isHas].toUpperCase()
   countries.splice(isHas,1)
   countries.push(h)
   console.log(countries) 
}

/* 5-) In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
If it does not exist add Sass to the array and print the array. */
let webTech = ['Phyton', 'Java', 'Angular', 'JavaScript']
let isHas1 = countries.indexOf('Sass')
console.log(isHas1)
if(isHas1 === -1 ){
    webTech.push('Sass')
    console.log(webTech)
} else {
   console.log('Sass is a CSS preprocess') 
}

// 6-) Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// Exercise: Level 3;
