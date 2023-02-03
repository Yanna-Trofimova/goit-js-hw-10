const ENDPOINT = "https://restcountries.com/v3.1/name/";
import Notiflix from 'notiflix';


function getCountries(name) {
    return fetch(`${ENDPOINT}${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (response.status === 404) {
                
                throw new Error(Notiflix.Notify.failure("Oops, there is no country with that name")) ;
                
            } 
            else {
                return response.json();
            }
        })
        
    
}




export default { getCountries };