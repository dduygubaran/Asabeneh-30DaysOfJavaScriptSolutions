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

// Exercise: Level 3;