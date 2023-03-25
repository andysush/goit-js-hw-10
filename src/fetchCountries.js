export function fetchCountries(countryName) {
  const url = new URL(`https://restcountries.com/v3.1/name/${countryName}`);
  url.searchParams.set('fields', `name,capital,population,flags,languages`);

  return fetch(url).then(response => {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response.json();
  });
}
