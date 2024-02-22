// Exercise: Level 1;

//  1-) Create an empty object called dog
let dog = {};

// 2-) Print the the dog object on the console
console.log(dog)

/* 3-) Add name, legs, color, age and bark properties for the dog object. 
The bark property is a method which return woof woof */
dog = {
    name: 'Karabas',
    legs: 4,
    color: 'white',
    age: 3,
    bark:  function () {
        console.log("woof woof")
    }
};

// 4-) Get name, legs, color, age and bark value from the dog object
console.log(Object.values(dog))

// 5-) Set new properties the dog object: breed, getDogInfo
dog.breed ='pomeranian'
dog.getDogInfo = function() {
    console.log(dog.breed)
}
dog.getDogInfo()

// Exercises: Level 2;

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

//1-) Find the person who has many skills in the users object.
let winner;
max = 0;
for(let user in users) {
  
    if(users[user].skills.length > max){
        max = users[user].skills.length;
        winner = user;
    }
}
console.log(winner)

// 2-) Count logged in users, count users having greater than equal to 50 points from the following object.
let count = 0;
for(let user in users) {
    if(users[user].points >= 50) {
        count++;
    }

}
console.log(count)

// 3-) Find people who are MERN stack developer from the users object ??????????

//4-) Set your name in the users object without modifying the original users object
console.log(users)
let newUser = Object.assign({}, users)
newUser = { Duygu : {email: 'db@gmail.com', skills: ['HTML', 'CSS', 'JavaScript', 'Angular'], age:28, isLoggedIn: true, points: 100}}
console.log(newUser)

// 5-) Get all keys or properties of users object
let keys = Object.keys(users)
console.log(keys)

// 6-) Get all the values of users object
let values = Object.values(users)
console.log(values)

// 7-) Use the countries object to print a country name, capital, populations and languages.
let countries = {
    name: 'Turkiye',
    capital: 'Ankara',
    populations: '85 million',
    language: 'Turkish'
}
console.log(` Name: ${countries.name}\n Capital: ${countries.capital}\n Populations: ${countries.populations}\n Language: ${countries.language}  `)

// Exercises: Level 3
