import debounce from 'lodash.debounce';

import './css/styles.css';
import API from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

// API.getCountries('Japan').then(console.log);

const input = document.getElementById("search-box");
const divContainer = document.querySelector(".country-info");

input.addEventListener(
  "input", debounce (onInputSearch, DEBOUNCE_DELAY )
);


function onInputSearch(e) {
    e.preventDefault();
    const inputValue = e.target.value;
    console.log(inputValue);
    // API.getCountries = inputValue;
    // API.getCountries(inputValue).then(renderCountryCard);
    
}

function creatCard({ name, capital, population, flags, languages }) {
    // const langCard = languages.map(language => language.name).join(", ");
    // const langCard = Object.values(languages).join(", ");

    return `
    <div class="info-card">
    
      <img src="${flags}" alt="flag" class="info-card_flag" width="100" heigth="100">
      <h1 class="info-card__name">${name}</h1>
      <p class="info-card_capital">Capital: ${capital}</p>
      <p class="info-card_popul">Population: ${population}</p>
      <p class="info-card_lang">Languages: ${languages}</p>
    </div>
    `;
}

function renderCountryCard(country) {
    const markup = creatCard(country);
    divContainer.innerHTML = markup;
}

API.getCountries(onInputSearch).then(renderCountryCard);

