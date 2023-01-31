const ENDPOINT = "https://restcountries.com/v3.1/name/";


function getCountries(name) {
    return fetch('${ENDPOINT}${name}?fields=name,capital,population,flags,languages')
        .then(response => {
            // console.log(response.json());
            return response.json();
        });
    // .then(country => {console.log(country);
    // })
    // .catch(error => {
    //     console.log(error);
    // });
}




export default { getCountries };