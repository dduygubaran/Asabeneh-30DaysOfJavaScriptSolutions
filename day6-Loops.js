// Exercise: Level 1;

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 1-) Iterate 0 to 10 using for loop, do the same using while and do while loop
// for loop
  for (let i=0; i<= 10; i++) {
    console.log(`${i}:` + countries[i])
  }

// while loop
  let j =0;
  while(j<=10) {
    console.log(`${j}:` + countries[j])
    j++;
  }

// 2-) Iterate 10 to 0 using for loop, do the same using while and do while loop
// for loop
  for(let i =10; i>=0; i--) {
    console.log(`${i}:` + countries[i])
  }

// while loop
  let k = 10;
  while(k>=0) {
    console.log(`${k}:` + countries[k])
    k--;
  }

// 3-) Iterate 0 to n using for loop
  for(let a=0; a<5; a++) {
    console.log(`${a}: ` + webTechs[a])
  }

// 4-) Write a loop that makes the following pattern using console.log():
  /* #
     ##
     ###
     ####
     #####
     ######
     ####### */
     let smm = '';
     for(let b=0; b<7; b++) {
        smm = smm + '#'
        console.log(smm)
      }
      console.log('\n')
     
// 5-) Use loop to print the following pattern:
/* 
//   0 x 0 = 0
//     1 x 1 = 1
//     2 x 2 = 4
//     3 x 3 = 9
//     4 x 4 = 16
//     5 x 5 = 25
//     6 x 6 = 36
//     7 x 7 = 49
//     8 x 8 = 64
//     9 x 9 = 81
//     10 x 10 = 100 */
  for(let b=0; b<=10; b++) {
    console.log(`${b} * ${b} = ${b*b}`)
  }

// 6-) Using loop print the following pattern
//     /* 
//     i    i^2   i^3
//     0    0     0
//     1    1     1
//     2    4     8
//     3    9     27
//     4    16    64
//     5    25    125
//     6    36    216
//     7    49    343
//     8    64    512
//     9    81    729
//     10   100   1000 */
  for(let b=0; b<=10; b++) {
    console.log(`i: ${b}, i^2: ${b*b}, i^3: ${b*b*b}`)
  }

// 7-) Use for loop to iterate from 0 to 100 and print only even numbers
  for(let c=0; c<=100; c++) {
    if(c%2==0)
    console.log(c)
  }

// 8-) Use for loop to iterate from 0 to 100 and print only odd numbers
  for(let d=0; d<=100; d++) {
    if(d%2==1)
    console.log(d)
  }

// 9-) Use for loop to iterate from 0 to 100 and print only prime numbers. 
  var totalPrimeNumber = 0;
  for (let i = 1; i <= 100; i++) {
    let prime = i > 1;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      console.log(i, "is a prime number");
      totalPrimeNumber += 1;
    } else {
      console.log(i, "is not a prime number");
    }
  }           

// 10-) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
  let sum = 0;
  for(let c=0; c<=100; c++) {
   sum = sum + c;
  }
  console.log(sum)

// 11-) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
  //even sum
  let s = 0
  for(let d=0; d<=100; d++) {
    if(d%2==0)
    s = s + d;
  }
  console.log(s)

  //odd sum
  let sm = 0;
  for(let d=0; d<=100; d++) {
    if(d%2==1)
    sm = sm + d;
  }
  console.log(sm)

// 12-) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array 
  let arr = [];
  arr.push(s, sm)
  console.log(arr)

// 13-) Develop a small script which generate array of 5 random numbers
  let arr1 = [];
  for(let c=0; c<5; c++) {
   script = (Math.random() * 11).toFixed(2)
   console.log(script );
   arr1.push(script)
   }
   console.log(arr1)
  
// 15-) Develop a small script which generate a six characters random id: 5j2khz 
   function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
console.log(makeid(6));

// Exercises: Level 2;

// 1-) Develop a small script which generate any number of characters random id:
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
console.log(makeid(11));

// 4-) Using the above countries array, create the following new array.
let arr3 = [];
for (let i=0; i<= 10; i++) {
    let upperCase = countries[i].toUpperCase()
    arr3.push(upperCase)
  }
  console.log(arr3)

// 5-) Using the above countries array, create an array for countries length'.
  let arr4 = [];
  for (let i=0; i<= 10; i++) {
    let lengthOfCountry = countries[i].length
    arr4.push(lengthOfCountry)
  }
  console.log(arr4)

/* 7-) In above countries array, check if there is a country or countries containing the word 'land'. 
If there are countries containing 'land', print it as array. 
If there is no country containing the word 'land', print 'All these countries are without land'. */ 
  arrCountry = [];
  for (let i=0; i<= 10; i++) {
    if(countries[i].includes('land'))  {
        arrCountry.push(countries[i])  
    }
    }
    if(arrCountry.length > 0 ) {
     console.log(arrCountry);
    } else {  
        console.log('All these countries are without land')
    }
 
/* 8-) n above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. 
If there is no country containing the word 'ai', print 'These are countries ends without ia'.*/
  arrCountry = [];
  for (let i=0; i<= 10; i++) {
    if(countries[i].includes('ia'))  {
        arrCountry.push(countries[i])  
    }
    }
    if(arrCountry.length > 0 ) {
     console.log(arrCountry);
    } else {  
        console.log('All these countries are without ia')
    }

// 9-) Using the above countries array, find the country containing the biggest number of characters.
let highest = countries[0].length;
for (let i=0; i<= 10; i++) {
    if(countries[i].length> highest) {
        highest = countries[i]
        console.log(highest)
    }
}

// 10-) Using the above countries array, find the country containing only 5 characters.
bosArray = [];
for (let i=0; i<= 10; i++) {
    if(countries[i].length == 5) {
       bosArray.push(countries[i])
       console.log(bosArray)
    }
}

// 11-) Find the longest word in the webTechs array
let highestWord = webTechs[0].length;
for (let i=0; i<= 10; i++) {
    if(webTechs[i].length > highestWord) {
        highestWord = webTechs[i]
        console.log(highestWord)
    }
}

// 13-) An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
  let  letHarf 
  let add = []
  for(let deneme=0; deneme<mernStack.length; deneme++) {
    for(let b=0; b<mernStack.length; b++) {
         letHarf = mernStack[deneme][0]
    }
    add.push(letHarf)
  }
  console.log(add)
  let y = add.join("")
  console.log(y)

/* 14-) Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 
using a for loop or for of loop and print out the items. */
let arrWebTech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for(let i=0; i< arrWebTech.length; i++) {
console.log(arrWebTech[i])
}

// 15-) This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruites = ['banana', 'orange', 'mango', 'lemon']
let bss = [];
for(let i=fruites.length-1; i>=0; i--) {
    console.log(fruites[i])
    bss.push(fruites[i])
}
console.log(bss)

// 16-) Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
for(let i=0; i<fullStack[i].length;i++) {
    for(let j=0; j<fullStack[i].length;j++) {
        console.log(fullStack[i][j].toUpperCase()) 
    }   
}

// Exercise: Level 3;

// 1-) Copy countries array(Avoid mutation)
// 2-) Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let countries2 = []
countries2 =  countries
console.log(countries2)
for(let i=0; i<countries.length; i++) {
    countries2.push(countries[i])
}
sortedCountry = countries2.sort()
console.log(sortedCountry);

// 3-) Sort the webTechs array and mernStack array
console.log( webTechs.sort());
console.log( mernStack.sort());

// 5-) Find the country containing the hightest number of characters in the countries array
let highest1 = countries[0].length;
for (let i=0; i<= countries.length; i++) {
    if(countries[i].length> highest1) {
        highest1 = countries[i]
        console.log(highest1)
    }
}

// 9-) Reverse the countries array and capitalize each country and stored it as an array
let bos = [];
console.log(countries)
countries3 = countries.reverse()
console.log(countries3)
for(let i=0; i<countries3.length; i++) {
    bos.push(countries3[i].toUpperCase())
}
console.log(bos);
