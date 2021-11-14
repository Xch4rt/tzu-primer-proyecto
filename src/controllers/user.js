const request = require('request');

const getPokemons = (req, res) => {
	let url = `http://pokeapi.co/api/v2/pokemon/`;
	request(url, (err, resp, body) => {
		if(!err && resp.statusCode == 200){
			let data = JSON.parse(body);
            res.json(data);
		}
	});
};

const getPokemonsID = (req, res) => {
    const { id } = req.params;
    let url = `http://pokeapi.co/api/v2/pokemon/${id}`;
	request(url, (err, resp, body) => {
		if(!err && resp.statusCode == 200){
			let data = JSON.parse(body);
            res.json(data);
		}
	});
};

const getPokemonName = (req, res) => {
    const { name } = req.params;
    let url = `http://pokeapi.co/api/v2/pokemon/${name}`;
	request(url, (err, resp, body) => {
		if(!err && resp.statusCode == 200){
			let data = JSON.parse(body);
            res.json(data);
		}
	});
};

module.exports = {
    getPokemons,
    getPokemonsID,
	getPokemonName
}