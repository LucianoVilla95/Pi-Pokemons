import axios from 'axios';

export function getPokemons() {
	return async function(dispatch) {
		const json = await axios('http://localhost:3001/pokemons');
		return dispatch({
			type: 'GET_POKEMONS',
			payload: json.data
		});
	};
};

export function filterByType(payload) {
	return {
		type: 'FILTER_BY_TYPE',
		payload
	}
};

export function filterCreated(payload) {
	return {
		type: 'FILTER_CREATED',
		payload
	}
};

export function filterByOrder(payload) {
	return {
		type: 'FILTER_BY_ORDER',
		payload
	}
};

export function filterByAttack(payload) {
	return {
		type: 'FILTER_BY_ATTACK',
		payload
	}
};

export function getNamePokemons(name) { //puede ser name o payload 
	return async function(dispatch) {
		const json = await axios(`http://localhost:3001/pokemons?name=${name}`);
		return dispatch({
			type: 'GET_NAME',
			payload: json.data
		});
	};
};

export function getTypes() {
	return async function(dispatch) {
		const json = await axios('http://localhost:3001/types');
		return dispatch({
			type: 'GET_TYPES',
			payload: json.data
		});
	};
};

export function postPokemons(payload) {
	return async function(dispatch) {
		const json = await axios.post('http://localhost:3001/pokemons', payload);
		return json;
	}
};

export function getDetail(id) {
	return async function(dispatch) {
		const json = await axios(`http://localhost:3001/pokemons/${id}`);
		return dispatch({
			type: 'GET_DETAIL',
			payload: json.data
		});
	};
};

export function deleteDetail() {
	return {
		type: 'DELETE_DETAIL',
		payload: []
	}
}