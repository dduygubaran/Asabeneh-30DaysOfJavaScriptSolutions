// Exercises: Level 1;

// 1-) Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {

    constructor(name, age, color, legs, type) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
        this.type = type;
    }

    speak() {
        return 'Animals speak'
    }

    get getName() {
        return this.name;
    }
}

const animal1 = new Animal('Simba', '4', 'White-Black', '4', 'Dog');
console.log(animal1.getName)
console.log('************');

// 2-) Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
    constructor(name, age, color, legs, type) {
        super(name, age, color, legs, type)
    }

    get getAge() {
        return this.age;
    }

    speak() {
        return `${this.name} barks` 
    }
}
const animal2 = new Dog('Tila', '7', 'Gold', 'Dog')
console.log(animal2.getAge)
console.log('************');

class Cat extends Animal {
    constructor(name, age, color, legs, type) {
        super(name, age, color, legs, type)
    }
    getInfo() {
        return `${this.name} is ${this.age} years old. It has ${this.legs} legs and ${this.color} feathers.`
    }
}

const animal3 = new Cat('Alice', '2', 'white', '4', 'Cat')
console.log(animal3.getInfo())
console.log('************');

// Exercises: Level 2;

// 1-) Override the method you create in Animal class
const animal4 = new Animal('Tila', '7', 'Gold', 'Dog')
console.log(animal4.speak())
const animal5 = new Dog('Tila', '7', 'Gold', 'Dog')
console.log(animal5.speak())

// Exercises: Level 3;

/* 1-) Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and 
measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, 
and frequency distribution of the sample. You can create a class called Statistics and create all the functions 
which do statistical calculations as method for the Statistics class. Check the output below. */

class Statistics {
    constructor(arr) {
        this.arr = arr;
    }

    sum(){
        let sum=0;
        for(let i=0; i<this.arr.length; i++){
            sum = sum+this.arr[i];
        }
        return sum;
    }

    count() {
        let count = 0;
        for(let i=0; i<this.arr.length; i++){
            count++;
        }
        return count;
    }

    max() {
        let max = 0;
        for(let i=0; i<this.arr.length; i++){
            if(this.arr[i] > max) {
                max = this.arr[i];
            }
        }
        return max;
    }

    min() {
        let min = 10000000;
        for(let i=0; i<this.arr.length; i++){
            if(this.arr[i] <  min) {
                min = this.arr[i];
            }
        }
        return min;
    }

    range() {
        return this.max()- this.min();
    }

    median() {
        let sort = this.arr.sort()
        let median = Math.floor(sort.length / 2);
        return sort[median]
    }

    //ortalama
    mean()  {
        return Math.ceil(this.sum() / this.arr.length) ;
    }

    mode() {

    }

    variance() {
   
    }

    standartDeviation() {
        let bosArray = [];
        let sum = 0;
        let array2 = [];
        for(let i=0; i<this.arr.length; i++) {                      // exp: 2,3,2,13    
            let difference = Math.abs( this.mean() - this.arr[i]);  // ort: 5
            //console.log(difference)                               // 3,2,3,8
            bosArray.push(difference); 
            array2 = bosArray.map(num => {
                return Math.pow(num,2)                              // 9,4,9,64
                //console.log(Math.pow(num,2))
            })  
        }
        //console.log(array2)
      
        for(let i=0; i<array2.length; i++) {
            sum += array2[i];
        }
        //console.log('sum: '+sum)                                    // 86
        let square = sum / (array2.length-1)                        // 28,66
        let square2 = Math.sqrt(square)
        return square2;                                             // 5.35
    }

    frequencyDistribution() {

    }

    describe() {
        console.log('Sum: ' + ages.sum())
        console.log('Count: ' + ages.count())
        console.log('Max: ' + ages.max())
        console.log('Min:' + ages.min())
        console.log('Median: ' + ages.median())
        console.log('Mean: ' + ages.mean())
        console.log('Range: ' + ages.range())
        console.log('Variance: ' + ages.variance())
        console.log('Standart Deviation: ' + ages.standartDeviation())
        console.log('Frequency Distribution: ' + ages.frequencyDistribution())

    }
}

//let ages = new Statistics([2,3,2,13])
let ages = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]);
console.log(ages.describe())

