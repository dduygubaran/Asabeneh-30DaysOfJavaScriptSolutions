// Exercises: Level 1;

const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// 1-) Read the countries API using fetch and print the name of country, capital, languages, population and area.
    async function fetchData() {
        try {
            const response = await fetch(countriesAPI)
            const countries = await response.json()
            //console.log(countries)
                for(let item of countries) {
                  console.log(`Country: ${item.name} Capital: ${item.capital} Language: ${item.languages} 
                  Population: ${item.population} Area: ${item.area}`)
                }
              } catch (err) {
                console.error(err)
              }
          }

    fetchData();

// Exercises: Level 2;

// 2-) Print out all the cat names in to catNames variable.
    async function fetchData2() {
        try{
            const response = await fetch(catsAPI)
            const cats = await response.json();
            //console.log(cats)
                for(let item of cats) {
                   console.log(`Name: ${item.name}`)
                }
            } catch(error) {
                console.error(error)
            }
        }

    fetchData2()

// Exercises: Level 3;

// 1-) Read the cats api and find the average weight of cat in metric unit.
    async function catWeight() {
        try{
            const response = await fetch(catsAPI);
            const cats = await response.json();
                for(let item of cats) {
                    console.log(`Awerage Weight[in metric unit]: ${item.weight.metric}`)
                }
            } catch (err) {
                console.error(err)
            }
        }

    catWeight(); 

// 2-) Read the countries api and find out the 10 largest countries
   /* async function largestCountry() {
        let bos = [];
        let max = 0;
        try{
            const response = await fetch(countriesAPI)
            const country = await response.json();
                for(let i=0; i<country.length; i++) {
                    if(country[i].area > max)
                        max = country[i].area   
                        bos.push(max)  
                }
                console.log(bos)
            } catch (err) {
                console.error(err)
            }
        }

    largestCountry()*/

// 3-) Read the countries api and count total number of languages in the world used as officials.
    async function languagesNumber() {
        try{
            const response = await fetch(countriesAPI);
            const countries = await response.json()
            const languages = new Set() 
                countries.map(el => el.languages.forEach(lang => languages.add(lang.name)))
                console.log(`Total number of languages is ${languages.size}`)
            } catch(err) {
                console.error(err)
            }
        }

    languagesNumber()
