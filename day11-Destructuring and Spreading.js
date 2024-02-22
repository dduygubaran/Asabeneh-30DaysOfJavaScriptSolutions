// Exercises: Level 1;

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// Exercises: Level 1;

// 1-) Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

// 2-) Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)

// 3-) Destructure the rectangle object by its properties or keys.
const {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter)

// Exercises: Level 2;

// 1-) Iterate through the users array and get all the keys of the object using destructuring
for(const {name, score, skills, age} of users) {
    console.log(name, score, skills, age)
}

// 2-) Find the persons who have less than two skills
for(const {name,  skills} of users) {
    if(skills.length < 2)
    console.log(name)
}

// Exercises: Level 3;

// 1-) Destructure the countries object print name, capital, population and languages of all countries
const countries1 = [
    ['Finland', 'Helsinki',  '5.5 million',  'Finnish'], 
    ['Sweden',  'Stockholm', '10.4 million', 'Swedish'], 
    ['Norway',  'Oslo',      '5.4 million',  'Norwegian'], 
    ['Turkiye', 'Ankara',    '84.7 million', 'Turkish']
]
for(const [country, capital, population, language ] of countries1) {
    console.log(`Country: ${country} Capital: ${capital} Population: ${population} Language: ${language}`)
}
