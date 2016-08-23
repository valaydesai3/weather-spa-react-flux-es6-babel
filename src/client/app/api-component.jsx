import 'whatwg-fetch';
let rootUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
let apiUrl = '&appid=398950a8797aa050e609dd1ff1bd0c2f&units=metric';

export default class Api {

    get(place) {
        return fetch(rootUrl + place + apiUrl, {
            headers: {
                // No need for special headers
            }
        })
        .then(function(response) {
            return response.json();
        });
    }
	
}