const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

const pokemons = require('./Pokemons.js');
const types = require('./Types.js');
const pokemonsPost = require('./PokemonsPost.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemons);
router.use('/types', types);
router.use('/pokemons', pokemonsPost);

module.exports = router;
