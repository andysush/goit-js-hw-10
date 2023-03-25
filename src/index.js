import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputEl.addEventListener(
  'input',
  debounce(() => {
    let countryName = inputEl.value.trim();
    if (!inputEl.value) {
      countryInfo.innerHTML = '';
      countryList.innerHTML = '';
      return;
    }
    fetchCountries(countryName)
      .then(showCountry)
      .catch(response => {
        {
          Notify.failure('Oops, there is no country with that name');
        }
      });
  }, DEBOUNCE_DELAY)
);

function showCountry(data) {
  if (data.length > 10) {
    countryInfo.innerHTML = '';
    countryList.innerHTML = '';
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  } else if (data.length === 1) {
    countryList.innerHTML = '';
    const countryData = data[0];
    countryInfo.innerHTML = `<div class="info__thumb"><img class="info__img" src="${
      countryData.flags.svg
    }" alt="${countryData.name.official}" width="50" height="30">
      </img>
      <p class="info__title">${countryData.name.official}</p></div>
            <div class="info__block">
                <ul class="info__list">
                <li class="info__item"><span class="info__part">Capital:</span> ${
                  countryData.capital
                }</li>
                <li class="info__item"><span class="info__part">Population:</span> ${
                  countryData.population
                }</li>
                <li class="info__item"><span class="info__part">Languages:</span> ${Object.values(
                  countryData.languages
                ).join(', ')} </li>
              </ul>
            </div>`;
  } else {
    if (inputEl.value) {
      countryList.innerHTML = '';
    }
    for (const el of data) {
      countryInfo.innerHTML = '';
      countryList.insertAdjacentHTML(
        'beforeend',
        `<li class="list__item"><img class="list__img" src="${el.flags.svg}" alt="${el.name.official}" width="50" height="30">
        </img>
        <p class="list__title">${el.name.official}</p></li>`
      );
    }
  }
}
