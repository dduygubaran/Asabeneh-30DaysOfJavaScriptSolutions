// Exercise: Level 1;

/* 1-) Calculate the total annual income of the person from the following text. 
‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’ */ 

let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let flag = /\d{4,5}/g
let matching = text.match(flag); 
console.log(matching)

let [salary, annualBonus, onlineCourse] = matching;
let totalAmount = ((Number(salary) + Number(onlineCourse)) * 12) + Number(annualBonus);
console.log(totalAmount)

/* 2-) The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. 
Extract these numbers and find the distance between the two furthest particles. */

let text2 = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
let flag2 = /.\d+/g;
let matching2 = text2.match(flag2);
console.log(matching2)

let distanceArray = [];
for (let item of matching2) {
    item = Number(item);
    distanceArray.push(item);
}

let distance = distanceArray[matching2.length-1] - distanceArray[0]
console.log('Distance: ' + distance)

// Exercise: Level 3;

// 1-) Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. 
;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

let sentence2 = sentence.replace(/%|\$|@|&|#|;|!/g, '')
console.log(sentence2)
