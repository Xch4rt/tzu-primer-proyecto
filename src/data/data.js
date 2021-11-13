const request = require('request');

// Pokemon API
const custom_URL = 'https://pokeapi.co/api/v2/pokemon/';

const data = request.get(custom_URL, (error, response, body ) => {
    if ( error ) {
        return console.dir(error);
    } console.dir(JSON.parse(body));
})
