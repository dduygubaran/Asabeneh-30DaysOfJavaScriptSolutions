
// Exercises: Level 1;

// 1-) create an empty set
let set = new Set();
console.log(set)

// 2-) Create a set containing 0 to 10 using loop
for(let i=0; i<10; i++) {
    set.add(i)
}
console.log(set)

// 3-) Remove an element from a set
set.delete(7)
console.log(set)

// 4-) Clear a set
set.clear();
console.log(set)

// 5-) Create a set of 5 string elements from array
let array = ['abc', 'cde', 'fgh', 'ijk', 'lmn']
console.log(array)
let set2 = new Set(array)
console.log(set2)

// 6-) Create a map of countries and number of characters of a country
let country = ["Japan", "Canada", "Italy", "France", "Turkiye"]
let length = new Set();
for(let i=0; i < country.length; i++) {
    length.add(country[i])
    length.add(country[i].length)
}
console.log(length)

// Exercises: Level 2;

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// 1-) Find a union b
let A = new Set(a)
let B = new Set(b)

// 2-) Find a intersection b
let d = a.filter((num) => B.has(num))
let D = new Set(d)
console.log(D)

// 3-) Find a with b
let c = a.concat(b);
let C = new Set(c)
console.log(C)



