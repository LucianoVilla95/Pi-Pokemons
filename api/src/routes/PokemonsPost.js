const { Router } = require('express');
const router = Router();
const { Pokemon, Type } = require('../db.js');

router.post('/', async (req, res) => {
	let {
		name,
		hp,
		attack,
		defense,
		speed,
		height,
		weight,
		image,
		types,
		createdInDb
	} = req.body;

	let pokemonCreated = await Pokemon.create({
		name,
		hp,
		attack,
		defense,
		speed,
		height,
		weight,
		image,
		createdInDb
	});

	let typeDb = await Type.findAll({
		where: {name:types}
	});

	pokemonCreated.addType(typeDb);
	res.status(200).send('Pokemon created successfully');
});

module.exports = router;