import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, filterByType, filterCreated, filterByOrder, filterByAttack } from '../actions/index.js';
import Pokemon from './Pokemon.jsx';
import Pagination from './Pagination.jsx';
import Nav from './Nav.jsx';
import style from '../styles/Home.module.css';



export default function Home() {

	const dispatch = useDispatch();

	const pokemons = useSelector(state => state.pokemons);

	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
	const [order, setOrder] = useState('');
	const indexOfLastPokemon = currentPage * pokemonsPerPage;
	const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
	const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

	const paginated = (number) => {
		setCurrentPage(number);
	};

	function HandleFilterType(e) {
		e.preventDefault();
		dispatch(filterByType(e.target.value));
		setCurrentPage(1);
	};

	function handleFilterCreated(e) {
		e.preventDefault();
		dispatch(filterCreated(e.target.value));
		setCurrentPage(1);
	};

	function handleFilterOrder(e) {
		e.preventDefault();
		dispatch(filterByOrder(e.target.value));
		setCurrentPage(1);
		setOrder(e.target.value);
	};

	function handleFilterAttack(e) {
		e.preventDefault();
		dispatch(filterByAttack(e.target.value));
		setCurrentPage(1);
		setOrder(e.target.value);
	};

	useEffect(() => {
		dispatch(getPokemons());
	},[dispatch]);
	
	return(
		<div className={style.homeContainer}>
			<div>
				<div>
					<Nav />
				</div>
				<div className={style.filtersCont}>
					<div>
						<select onChange={e => handleFilterOrder(e)} className={style.filterOrder}>
							<option type='order' key='order' hidden>ORDER</option>
							<option value='asc' key='asc'>A-z</option> {/*el value permite acceder al filtro*/}
							<option value='desc' key='desc'>Z-a</option>
						</select>
					</div>
					<div>
						<select onChange={e => HandleFilterType(e)} className={style.filterType}>
							<option type='type' key='type' hidden>TYPE</option>
							<option value='bug' key='bug'>Bug</option> 
							<option value='dark' key='dark'>Dark</option> 
							<option value='dragon' key='dragon'>Dragon</option> 
							<option value='electric' key='electric'>Electric</option>
							<option value='fairy' key='fairy'>Fairy</option>
							<option value='fighting' key='fighting'>Fighting</option>
							<option value='fire' key='fire'>Fire</option>
							<option value='flying' key='flying'>Flying</option>
							<option value='ghost' key='ghost'>Ghost</option>
							<option value='grass' key='grass'>Grass</option>
							<option value='ground' key='ground'>Ground</option>
							<option value='ice' key='ice'>Ice</option> 
							<option value='normal' key='normal'>Normal</option> 
							<option value='poison' key='poison'>Poison</option> 
							<option value='psychic' key='psychic'>Psychic</option> 
							<option value='rock' key='rock'>Rock</option> 
							<option value='shadow' key='shadow'>Shadow</option> shadow
							<option value='steel' key='steel'>Steel</option> steel
							<option value='unknown' key='unknown'>Unknown</option> 
							<option value='water' key='water'>Water</option> 
						</select>
					</div>
					<div>
						<select onChange={e => handleFilterAttack(e)} className={style.filterAttack}>
							<option type='attack' key='attack' hidden>ATTACK</option>
							<option value='biggest' key='biggest'>Biggest attack</option>
							<option value='minor' key='minor'>Minor attack</option>
						</select>
					</div>
					<div>
						<select onChange={e => handleFilterCreated(e)} className={style.filterAll}>
							<option type='all' key='all' hidden>ALL</option>
							<option value='existing' key='existing'>Existing</option>
							<option value='created' key='created'>Created</option>
						</select>
					</div>
				</div>
				<div className={style.pagCont}>
					<Pagination
					pokemonsPerPage={pokemonsPerPage}
					pokemons={pokemons.length}
					paginated={paginated}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage} />
				</div>
				<div className={style.pokemonCards}>
					{
						currentPokemons.map(e => 
							<div>
								<Pokemon image={e.image} name={e.name} id={e.id} types={e.types.join('-')} attack={e.attack} key={e.id} />
							</div>)
					}
				</div>
			</div>
		</div>
		)
};