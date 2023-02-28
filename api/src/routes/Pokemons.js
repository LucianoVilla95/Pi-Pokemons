const { Router } = require('express');
const router = Router();
const { getApiInfo, getDbInfo, getAllPokemons } = require('../controllers/Pokemons.js');

router.get('/', async (req, res) => {
	const { name } = req.query;
	let pokemonsTotal = await getAllPokemons();
	if(name) {
		let pokemonName = await pokemonsTotal.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
		pokemonName.length ?
		res.status(200).send(pokemonName) :
		res.status(404).send(`There are no pokemons with that ${name}`);
	} else {
		res.status(200).send(pokemonsTotal);
	}
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const pokemonsTotal = await getAllPokemons();
	if(id) {
		let pokemonId = await pokemonsTotal.filter(e => e.id == id);
		pokemonId.length ?
		res.status(200).json(pokemonId) :
		res.status(404).send('No pokemon found with that id');
	}
});

module.exports = router;