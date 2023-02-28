import React from 'react';
import style from '../styles/Pagination.module.css';

export default function Pagination({pokemonsPerPage, pokemons, paginated, setCurrentPage, currentPage}) {
	const pageNumbers = [];

	for(let i = 1; i <= Math.ceil(pokemons/pokemonsPerPage); i++) {
		pageNumbers.push(i);
	};

	const nextPage = () => {
		setCurrentPage(parseInt(currentPage) + 1);
	};

	const previousPage = () => {
		setCurrentPage(parseInt(currentPage) - 1);
	};

	return(
		<div>
			<div>
				{
					pageNumbers?.map(number =>
						<div key={number} className={style.pag}>
							<button onClick={() => paginated(number)} className={style.pagBut}>{number}</button>
						</div>
						)
				}
			</div>
			<div className={style.butCont}>
				<button disabled={currentPage <= 1} onClick={previousPage} className={style.but1}>Previous</button>
				<button disabled={currentPage >= (pokemons/pokemonsPerPage)} onClick={nextPage} className={style.but2}>Next</button>
			</div>
		</div>
		)
};