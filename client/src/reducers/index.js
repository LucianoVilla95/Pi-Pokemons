const initialState = {
	pokemons: [],
	pokemonsTypes: [], //este estado no se renderiza, lo uso para modificar el estado que se renderiza es decir pokemon y asi aplicar el filtro y que se vea
	types: [],
	details: []
};

function rootReducer(state = initialState, action) {
	switch(action.type) {
		case 'GET_POKEMONS':
		return {
			...state,
			pokemons: action.payload,
			pokemonsTypes: action.payload
		}

		case 'FILTER_BY_TYPE':
		const allPokemons = state.pokemonsTypes;
		const typesFiltered = allPokemons.filter(e => e.types.includes(action.payload)); //en el action.payload me llega el e.target.value del handle del home
		return {
			...state,
			pokemons: typesFiltered
		}

		case 'FILTER_CREATED':
		const pokemonsCreated = state.pokemonsTypes;
		const createdFilter = action.payload === 'created' ? pokemonsCreated.filter(e => e.createdInDb) : pokemonsCreated.filter(e => !e.createdInDb);
		return {
			...state,
			pokemons: createdFilter
		}

		case 'FILTER_BY_ORDER':
		const orderPokemons = action.payload === 'asc' ?
		state.pokemons.sort((a,b) => {
			if(a.name > b.name) {
				return 1;
			}
			if(b.name > a.name) {
				return -1;
			}
			return 0;
		}) : state.pokemons.sort((a,b) => {
			if(a.name > b.name) {
				return -1;
			}
			if(b.name > a.name) {
				return 1;
			}
			return 0;
		});
		return {
			...state,
			pokemons: orderPokemons
		}

		case 'FILTER_BY_ATTACK':
		const pokemonsAttack = action.payload === 'minor' ?
		state.pokemons.sort((a,b) => {
			if(a.attack > b.attack) {
				return 1;
			}
			if(b.attack > a.attack) {
				return -1;
			}
			return 0;
		}) : state.pokemons.sort((a,b) => {
			if(a.attack > b.attack) {
				return -1;
			}
			if(b.attack > a.attack) {
				return 1;
			}
			return 0;
		});
		return {
			...state,
			pokemons: pokemonsAttack
		}

		case 'GET_NAME':
		return {
			...state,
			pokemons: action.payload
		}

		case 'POST_POKEMONS':
		return {
			...state
		}

		case 'GET_TYPES':
		return {
			...state,
			types: action.payload
		}

		case 'GET_DETAIL':
		return {
			...state,
			details: action.payload
		}

		case 'DELETE_DETAIL':
		return {
			...state,
			details: action.payload
		}

		default:
		return {
			...state
		}
	};
};

export default rootReducer;