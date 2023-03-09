import React/*, { useState }*/ from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNamePokemons } from '../actions/index.js';
import style from '../styles/Nav.module.css';

export default function Nav() {
	const dispatch = useDispatch();

	// const [name, setName] = useState('');

	function handleInputChange(e) {
		e.preventDefault();
		// setName(e.target.value);
		dispatch(getNamePokemons(e.target.value));
	};

	// function handleSubmit(e) {
	// 	e.preventDefault();
	// 	dispatch(getNamePokemons(name));
	// };

	return(
		<div className={style.navContainer}>
			<div className={style.pokeTitle}>
				<h1>Pokemon App</h1>
			</div>
			<div className={style.pokeCreate}>
				<Link to={'/created'}>
					<button className={style.pokeBut}>Create pokemon</button>
				</Link>
			</div>
			<div className={style.pokeInputCont}>
				<input type='text' placeholder='Pokemon...' onChange={e => handleInputChange(e)} className={style.pokeInput} />
{/*				<button type='submit' onClick={e => handleSubmit(e)} className={style.pokeBut2}>Search</button>
*/}			</div>
		</div>
		)
};