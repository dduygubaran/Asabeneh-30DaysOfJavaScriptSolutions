// Exercises: Level 1;

// 1-) Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName', 'Duygu')
localStorage.setItem('lastName', 'Baran')
localStorage.setItem('age', 28)
localStorage.setItem('country', 'Turkiye')
console.log(localStorage)

// Exercises: Level 2;

/* 1-) Create a student object. The student object will have first name, last name, age, skills, country,
 enrolled keys and values for the keys. Store the student object in your browser localStorage.*/
const student =  {
        'firstName': 'Erkan',
        'lastName': 'Beyoğlu',
        'age': 34,
        'country': 'Turkiye'
    }

let studentStr = JSON.stringify(student)
console.log(studentStr)
localStorage.setItem('studentStr', studentStr)

// Exercises: Level 3;
