'use strict';

import { utils } from "./Utils.js"

const mainContent = document.querySelector(".site-main-content-container");

const inputSearchName = document.querySelector(".search-name");
const inputSelimg = document.querySelector(".selpic-cls");

let moviesData = [];
let cityData = [];

const searchName = document.querySelector(".search-name");
const suggestionsName = document.querySelector(".suggestions-name");

const searchCity = document.querySelector(".search-city");
const suggestionsCity = document.querySelector(".suggestions-city");

searchName.addEventListener('input', function () {
    var inputText = searchName.value;
    suggestionsName.innerHTML = '';

    if (inputText.length > 0) {
        var matchingSuggestions = moviesData.filter(function (item) {
            return item.title.toLowerCase().indexOf(inputText.toLowerCase()) !== -1;
        });
     
        matchingSuggestions.forEach(function (suggestion) {
            var li = document.createElement('li');
            li.textContent = suggestion.title;
            li.classList.add('suggestion');

            li.addEventListener('click', function () {
                searchName.value = suggestion.title;
                suggestionsName.innerHTML = '';
            });

            suggestionsName.appendChild(li);
        });
    }
});


searchCity.addEventListener('input', function () {
    var inputText = searchCity.value;
    suggestionsCity.innerHTML = '';
   
    if (inputText.length > 0) {
        console.log(cityData);
        var matchingSuggestions = cityData.filter(function (item) {
            return item.name.toLowerCase().indexOf(inputText.toLowerCase()) !== -1;
        });
     
        matchingSuggestions.forEach(function (suggestion) {
            var li = document.createElement('li');
            li.textContent = suggestion.name;
            li.classList.add('suggestion');

            li.addEventListener('click', function () {
                searchCity.value = suggestion.name;
                suggestionsCity.innerHTML = '';
            });

            suggestionsCity.appendChild(li);
        });
    }
});

const url = "./assets/data/movies-1.json";
const urlCity = "./assets/data/citys.json";
const options = {
    method: "GET",
    mode: "cors"
}

async function getMovies() {
    try {
        const result = await fetch(url, options);
        if (result.status >= 200 && result.status < 400) {
            const data = await result.json();
            const resultData = data.results;

            moviesData = resultData;
            AddToList(moviesData);
        }
    } catch (error) {
        console.log(error.message);
    }
} 
async function getCitys() {
    try {
        const result = await fetch(urlCity, options);
        if (result.status >= 200 && result.status < 400) {
            const data = await result.json();
            const resultData = data.results;
            
            cityData = resultData;            
        }
    } catch (error) {
        console.log(error.message);
    }
} 

function AddToList(data) {
    data.forEach(item => {
        let divResponsive = document.createElement("div");
        divResponsive.classList.add("responsive");

        let divGalary = document.createElement("div");
        divGalary.classList.add("gallery");

        let img = document.createElement("img");
        img.src = item.img;

        let divDesc = document.createElement("div");
        divDesc.classList.add("desc");
        divDesc.innerHTML = item.title;

        divResponsive.appendChild(divGalary);
        divGalary.appendChild(img);
        divGalary.appendChild(divDesc);
         
        mainContent.appendChild(divResponsive);
    });
}

getMovies();
getCitys();
