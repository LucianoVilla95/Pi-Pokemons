import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/LandingPage.module.css';


export default function LandginPage() {
	return( 
		<div className={style.landingContainer}>
			<div>
				<div className={style.title}>
					<h1 className={style.title1}>POKEMON APP</h1>
				</div>
				<img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png' className={style.img} />
				<div>
					<Link to={'/pokemons'}>
						<button className={style.but}>Home</button>
					</Link>
				</div>
			</div>
		</div>
		)
};