const { Router } = require('express');
const axios = require('axios');
const router = Router();
const { Type } = require('../db.js');


router.get('/', async (req, res) => {
	const typesApi = await axios.get('https://pokeapi.co/api/v2/type');
	const types = typesApi.data.results.map(e => e.name);
	types.forEach(e => {
		Type.findOrCreate({
			where: {name: e}
		})
	})
	const allTypes = await Type.findAll();
	res.status(200).send(allTypes);
});

module.exports = router;