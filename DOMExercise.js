const portillos = document.getElementById(`portillos`);

const images = document.getElementsByTagName(`img`);

const centered = document.getElementsByClassName(`center`);

const ginoseast = document.querySelector(`#ginos`);

const pTags = document.querySelectorAll(`p`);

const h1Tag = document.querySelector(`.center`);

const others = document.getElementById(`others`);

const aTag = document.querySelector(`a`);

h1Tag.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`;

others.innerHTML = '<h3>Other Favorites</h3>';

aTag.href = "https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/";

h1.classList.add (`text-color`);
h1.classList.add (`background`);

h1.classList.remove(`background`);

h4.innerText = `CHICAGO - A GREAT PLACE TO EAT`;

const body = document.querySelector(`body`);

body.append(h4);

const h5 = document.querySelector(`h5`);
h5.innerText = `See you in the windy city`;

aTag.insertAdjacentElement(`afterend`,h5);



const jays = document.querySelector(`li`);
jays.remove();

const divs = document.querySelectorAll(`div`);

for (div of divs){
    div.classList.toggle(`background`);
}


const hungry = ["Thanks", "A", "Lot", "Now", "I", "Am", "Hungry"];


for (word of hungry){
    const body1 = document.querySelector(`body`);
    const span = document.createElement(`span`);
    span.innerText = `${word}`;
    body1.append(span);
}