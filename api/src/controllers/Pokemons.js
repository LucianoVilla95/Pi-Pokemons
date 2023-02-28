const axios = require('axios');
const { Pokemon, Type } = require('../db.js');

const getApiInfo = async () => {
	try {
		const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40");
		const apiInfo = await apiUrl.data.results;
		
		const pokemons = Promise.all(apiInfo.map(async (e) => {
			const info = (await axios.get(e.url)).data;
			return {
				id: info.id,
                name: info.name,
                hp: info.stats[0].base_stat,
                attack: info.stats[1].base_stat,
                defense: info.stats[2].base_stat,
                speed: info.stats[5].base_stat,
                height: info.height,
                weight: info.weight,
                types: info.types.map(e => e['type'].name),
                image: info.sprites.other['official-artwork'].front_default
			}
		}))

		return pokemons;
	} catch(error) {
		console.log(error);
	}	
};

const getDbInfo = async () => {
	const data = (await Pokemon.findAll({
		include: {
			model: Type,
			attributes: ['name'],
			through: {
				attributes: [],
			},
		}
	})).map(e => {
		const json = e.toJSON();
		return {
			...json,
			types: json.types.map(type => type.name)
		}
	})
	return data;
};

const getAllPokemons = async () => {
	const apiInfo = await getApiInfo();
	const dbInfo = await getDbInfo();
	const infoTotal = apiInfo.concat(dbInfo);
	return infoTotal;
};


module.exports = {
	getApiInfo,
	getDbInfo,
	getAllPokemons
}