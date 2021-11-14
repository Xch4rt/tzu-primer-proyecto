const { Router } = require('express');
const { getPokemons, getPokemonsID, getPokemonName } = require('../controllers/user');

const router = Router();

// Endpoints here:
router.get('/pokemon', getPokemons);
router.get('/pokemon/:id', getPokemonsID);
router.get('/pokemon/:name', getPokemonName);

module.exports = router;