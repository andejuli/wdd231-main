// api.js
const baseUrl = "https://developer.nps.gov/api/v1/";

async function getJson(endpoint) {
  // replace this with your actual key
  const apiKey = "0XteNzlPnV5wJhsUNf2cJLdqThFb1WmSmGssXAX2";
  // construct the url: baseUrl + endpoint + parameters
  const url = baseUrl + endpoint;
  // set the options. The important one here is the X-Api-Key
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey
      }
  }
  // make the request
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data;
}

getJson('alerts?parkCode=acad,dena');


async function renderClimbingList() {
    const endpoint = 'activities/parks?q=climbing';
    const printPlace = document.querySelector('#output');
    const climbingList = await getJson(endpoint);
    console.log(climbingList);
    const html = climbingList.data[0].parks.map(listTemplate);
    printPlace.innerHTML = html.join('');
}

function listTemplate(item){
    return`
        <li><a href="${item.url}">${item.name}</a>, ${item.states} </li>`
}

renderClimbingList()