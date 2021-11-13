const { response, request } = require('express');
const data = require('../data/data');

const getPokemons = (req = request, res = response) => {

    res.json({
        msg: 'Peticion GET a mi API',
        data: data
    });
}

const getPokemonById = (req = request, res = response ) => {
    res.json({
        msg: 'Peticion GET por ID a mi API',
        // data: data id 
    })
}

module.exports = {
    getPokemons,
    getPokemonById
}