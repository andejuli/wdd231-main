setTimeout(function () {
    console.log('async')
}, 1000);

console.log('sync');

// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
async function getPokemonList(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuffList(data);
  }
}
function doStuff(data) {
  results = data;
  const outputElement = document.querySelector("#output");
  const html = `<h2>${data.name}</h2><img src="${data.sprites.front_default}" alt="${data.name}">`;
  outputElement.innerHTML = html;
  console.log("first: ", results);
}

function doStuffList(data) {
  console.log(data);
  const pokeListElement = document.querySelector("#outputList");
  const pokeList = data.results;
  pokeList.forEach((currentItem) => {
    const html = `<li>${currentItem.name}</li>`;
    // note the += here...
    pokeListElement.innerHTML += html;
  });
}
getPokemon(url);
console.log("second: ", results);

getPokemonList(urlList);







const parkurl = 'https://developer.nps.gov/api/v1/parks?parkCode=yell&api_key=0XteNzlPnV5wJhsUNf2cJLdqThFb1WmSmGssXAX2'


async function getJSON(){
    let data;
    const response = await fetch(parkurl);
    if(response.ok){
        data = await response.json();
        console.log(data);
        document.querySelector('#outputPark').innerHTML = data.data[0].fullName;
    }
    else{
        console.log('error');
    }
}

getJSON();
