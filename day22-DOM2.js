// Exercises: Level 1;

/* 1-) Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
    * Even numbers background is green
    * Odd numbers background is yellow
    * Prime numbers background is red
*/
    for(let i=1; i<=100; i++) {
        let div = document.createElement('div')
        div.textContent = i;
        div.style.width = "100px"
        div.style.height = "100px"
        div.style.margin = "2px"
        div.style.fontSize = "16px"
        div.style.color = "black"
        div.style.display = "flex"
        div.style.justifyContent = "center"
        div.style.alignItems= "center"
        div.style.float = "left"
     
        if(i % 2 == 0) {
            div.style.backgroundColor = 'green'
        } else if( i % 2 == 1 ) {
            div.style.backgroundColor = 'yellow'
        } else {
            div.style.backgroundColor = 'red'
        }
        
        console.log(div)
        document.body.append(div)
        }

// Exercises: Level 2;

// 2-) Use the countries array to display all the countries.See the design

let h1 = document.createElement("h1")
h1.textContent = "WORLD COUNTRIES LIST"
h1.style.display = "flex"
h1.style.justifyContent = "center"

let h3 = document.createElement("h3")
h3.style.display = "flex"
h3.style.justifyContent = "center"

let p = document.createElement("p")
p.textContent = "30DaysOfJavaScript: DOM-Day-2"
p.style.display = "flex"
p.style.justifyContent = "center"

let p1 = document.createElement("p")
p1.textContent = "Author: Asabeneh Yetayeh"
p1.style.display = "flex"
p1.style.justifyContent = "center"

document.body.append(h1, h3, p, p1)

const url = 'https://restcountries.com/v2/all'
async function countryNames() {
    try {
        const response = await fetch(url);
        const countries = await response.json();

        for(let item of countries) {
            let div = document.createElement('div')
            div.textContent = item.name;
            div.style.width = "100px"
            div.style.height = "100px"
            div.style.margin = "2px"
            div.style.fontSize = "16px"
            div.style.color = "yellow"
            div.style.display = "flex"
            div.style.justifyContent = "center"
            div.style.alignItems= "center"
            div.style.float = "left"
            div.style.border = "solid"
            
            console.log(div)
            document.body.appendChild(div)
        }
        h3 = document.querySelector('h3')
        h3.innerHTML = `Total Number of Countries: ${countries.length}`

    } catch (err) {
        console.error(err)
      }
} 
countryNames()
