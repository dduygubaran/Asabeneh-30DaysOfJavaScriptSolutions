// Exercises: Level 1;

//1-) Create a closure which has one inner function
function outerFunction() {
    let count = 0;

    function innerFunction() {
        count++
        return count;
    }

    return innerFunction
}

let innerFunc = outerFunction()
console.log(innerFunc())

// Exercises: Level 2

//2-) Create a closure which has three inner functions
function outerFunction() {
    let count = 0;

    function create() {
        count++
        return count
    }

    function decrease() {
        count--
        return count
    }

    return {
        create: create,
        decrease: decrease
    }
}

let count = outerFunction()
console.log(count.create())
console.log(count.decrease())
console.log(count.create())
console.log(count.create())
