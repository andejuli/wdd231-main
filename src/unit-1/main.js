import {getRecipes} from "./recipe.mjs";
const cookieData = getRecipes();

console.log(cookieData);

function setCookieInfo(data){
    console.log(data);
    const container = document.querySelector(".recipe-container");

    // .map is used to loop through multiple items in an array
    const html = data.map(recipeTemplate);

    container.innerHTML = html.join("");
}



function recipeTemplate(info){
    return`
    <div class="recipe">
        <h2>${info.recipe_name}</h2>
        <img src="${info.image}" alt="${info.notes}"/>
    </div>
    `
}

function getDataType(data){
    const tradContainer = document.querySelector(".trad");
    const trad = data.find(recipe => recipe.type === "traditional");
    tradContainer.innerHTML = trad.recipe_name;
}

setCookieInfo(cookieData);