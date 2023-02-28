import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/Pokemon.module.css';

export default function Pokemon({image, name, types, attack, id}) {
	return(
		<div className={style.pokemonCard}>
			<Link to={`/pokemons/${id}`} className={style.detLink}>
				<div>
					<img src={image} alt='' className={style.imgPoke}/>
				</div>
				<div className={style.pokeDet}>
					<h2>{name}</h2>
					<h4>Attack: {attack}</h4>
					<h4>{types}</h4>
				</div>	
			</Link>
		</div>
		)
};