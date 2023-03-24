import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
const countryInfo = document.querySelector('.country-info');
inputEl.addEventListener(
  'input',
  debounce(() => {
    let countryName = inputEl.value;
    fetchCountries(countryName).then(showCountry).catch(console.log);
  }, DEBOUNCE_DELAY)
);

function showCountry({ name, capital, population, flags, languages }) {
  // name.official
  // capital
  // population
  // flags.svg
  // languages

  const markup = `<img src="" alt="" />
      <div class="content">
        <h1 class="content__heder"></h1>
        <ul class="content__list">
          <li class="content__item"></li>
          <li class="content__item"></li>
          <li class="content__item"></li>
        </ul>
      </div>`;
}
