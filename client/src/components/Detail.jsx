import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, deleteDetail, deletePokemon } from '../actions/index.js';
import Nav from './Nav.jsx';
import style from '../styles/Detail.module.css';


export default function Detail() {

	const { id } = useParams();
	const dispatch = useDispatch();

	const details = useSelector(state => state.details);

	function handleChange(e) {
		dispatch(deleteDetail());
	};

	useEffect(() => {
		dispatch(getDetail(id));
	},[dispatch]);
	
	return(
		<div className={style.cont}>
			<Nav />
			<div className={style.detailCont}>
				<div>
					<Link to={'/pokemons'}>
						<button onClick={e => handleChange(e)} className={style.but}>Return</button>
					</Link>
				</div>
				{
					details.length ?
					<div>
						<div>
							<h1 className={style.title}>{details[0].name}</h1>
							<img src={details[0].image} alt='' className={style.img}/>
						</div>
						<div className={style.det}>
							<h2 className={style.det1}>Detail</h2>
							<h3>Code: {details[0].id}</h3>
							<h3>Hp: {details[0].hp}</h3>
							<h3>Attack: {details[0].attack}</h3>
							<h3>Defense: {details[0].defense}</h3>
							<h3>Speed: {details[0].speed}</h3>
							<h3>Height: {details[0].height}</h3>
							<h3>Weight: {details[0].weight}</h3>
							<h3>Types: {details[0].types.join('-')}</h3>
						</div>
					</div> : <p>Loading...</p>
				}
			</div>
		</div>
		)
};