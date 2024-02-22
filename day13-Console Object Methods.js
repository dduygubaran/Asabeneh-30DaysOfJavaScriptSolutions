// Exercises: Level 1;

// 1-) Display the countries array as a table
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
console.table(countries)

// 2-) Display the countries object as a table
const countries2 = [
    {
        nameOfCountry: 'Turkiye',
        capital: 'Ankara',
        nation: 'Turkish'
    },
    {
        nameOfCountry: 'German',
        capital: 'Berlin',
        nation: 'German'
    },
    {
        nameOfCountry: 'Japan',
        capital: 'Tokyo',
        nation: 'Japanese'
    },
    {
        nameOfCountry: 'Chinese',
        capital: 'Beijing',
        nation: 'Chinese'
    }
]
console.table(countries2)

// 3-) Use console.group() to group logs
console.group('InformationOfCountry')
console.log(countries2)
console.groupEnd()

// Exercises: Level 2;

// 1-) 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, '10 is not greater than 2 * 10')

// 2-) Write a warning message using console.warn()
console.warn('Bu bir uyarı mesajıdır')

// 3-) Write an error message using console.error()
console.error('Bu bir hata mesajıdır!')

// Exercises: Level 3;

// 1-) Check the speed difference among the following loops: while, for, for of, forEach
const names = ["Duygu", "Asabeneh", "Tayfun", "Prototurk"]

// for
console.time('for')
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}
console.timeEnd('for');

// forEach
console.time('forEach')
names.forEach(name => console.log(name))
console.timeEnd('forEach')

// for of
console.time('for of')
for (let name of names) {
    console.log(name)
}
console.timeEnd('for of')

// while
console.time('while loop')
let i = 0
while (i < names.length) {
    console.log(names[i])
    i++;
}
console.timeEnd('while loop')


