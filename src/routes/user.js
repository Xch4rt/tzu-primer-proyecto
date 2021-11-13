const { Router } = require('express');
const { getPokemons } = require('../controllers/user');

const router = Router();

// Endpoints here:
router.get('/pokemon', getPokemons);
// router.get('/pokemon/:id', getPokemonById)

module.exports = router;