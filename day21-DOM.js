// Exercise: Level 1;

// 1-) Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
let paragraph = document.getElementsByTagName('p')
console.log(paragraph)

// 2-) Get each of the the paragraph using document.querySelector('#id') and by their id
let p1 = document.getElementById('p1')
console.log(p1)
let p2 = document.getElementById('p2')
console.log(p2)
let p3 = document.getElementById('p3')
console.log(p3)
let p4 = document.getElementById('p4')
console.log(p4)

// 3-) Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
let titles = document.querySelectorAll('p')
console.log(titles)

// 4-) Loop through the nodeList and get the text content of each paragraph
let allTitles = document.querySelectorAll('p')
console.log(allTitles.length)
for(let i=0; i<allTitles.length; i++) {
    console.log(allTitles[i])
}

// 5-) Set a text content to paragraph the fourth paragraph,Fourth Paragraph
document.getElementById('p4').setAttribute('textContent', 'Fourth Paragraph')

// 6-) Set id and class attribute for all the paragraphs using different attribute setting method
let pr = document.querySelectorAll('p')
pr[0].classList.add('prgrph-1')
pr[1].setAttribute('class', 'prgrph-2')
pr[2].className = 'prgrph-3'

// Exercise: Level 2;
// 1-) Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
document.getElementById('p1').style.color = 'red'
document.getElementById('p2').style.background = 'orange'
document.getElementById('p3').style.fontSize = '20px'
let title = document.getElementById('p4')
title.setAttribute('style', 'color:white; background:pink')

/* 2-) Select all paragraphs and loop through each elements and give the 
first and third paragraph a color of green, and the second and the fourth paragraph a red color*/
let allItem = document.querySelectorAll('p')
    for(let i=0; i<allItem.length; i++) {
        if(i % 2 == 0) {
            allItem[i].style.color = 'green'
        }else {
            allItem[i].style.color = 'red'
        }
    }

// 3-) Set text content, id and class to each paragraph
for(let i=0; i<allItem.length; i++) {
    if(i==0) {
        allItem[i].setAttribute('id', 'P1')
        allItem[i].classList.add('class-1')
    }else if(i==1) {
        allItem[i].setAttribute('id', 'P2')
        allItem[i].classList.add('class-2')
    }else if(i==2) {
        allItem[i].setAttribute('id', 'P2')
        allItem[i].classList.add('class-3')
    }else{
        allItem[i].setAttribute('id', 'P4')
        allItem[i].classList.add('class-4')
    }
}
console.log(allItem)

// Exercises: Level 3;
