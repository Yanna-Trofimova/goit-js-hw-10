import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import './css/styles.css';
import API from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;



const input = document.getElementById("search-box");
const divContainer = document.querySelector(".country-info");
const listCountry = document.querySelector(".country-list");

input.addEventListener(
  "input", debounce (onInputSearch, DEBOUNCE_DELAY )
);


function onInputSearch(e) {
    e.preventDefault();
    const inputValue = e.target.value.trim();

    // if (!inputValue) {
    //     return;
    // }

    if (inputValue.length === 0) {
        return inputClear();
    }  

   
    
    API.getCountries(inputValue)
        .then(searchCountryFinally)
        .catch()
        
}


function creatCard(countries) {
    
    return countries.map(({ name, capital, population, flags, languages }) => 
        
         `
    <div class="info-card">
    
      <img src="${flags.png}" alt="flag" class="info-card_flag" width="100" heigth="100">
      <h1 class="info-card__name">${name.official}</h1>
      <p class="info-card_capital">Capital: ${capital}</p>
      <p class="info-card_popul">Population: ${population}</p>
      <p class="info-card_lang">Languages: ${Object.values(languages).join(", ")}</p>
    </div>
    `
    ).join("");
   

   
}

function renderCountryCard(countries) {
    const markup = creatCard(countries);
    divContainer.innerHTML = markup;
listCountry.innerHTML = '';
}


function creatList (countries) {
    
    return countries.map(({ name,flags }) => 
        
         `
         <li class="country-item">
            <img src="${flags.png}" alt="flag" class="info-card_flag" width="50" heigth="50">
            <h1 class="info-card__name">${name.official}</h1>
        </li>
    `
    ).join("");
}


function renderCountryList(countries) {
    const items = creatList(countries);
    listCountry.innerHTML = items;
    divContainer.innerHTML = '';
}

function inputClear() {
    divContainer.innerHTML = '';
    listCountry.innerHTML = '';
}

function searchCountryFinally(countries) {
    if (countries.length === 1) {
        
        renderCountryCard(countries);
       
    } else if (countries.length >= 2 && countries.length <= 10) {
        
        renderCountryList(countries);
          
    }else if (countries.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    }
}


