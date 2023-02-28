import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postPokemons, getTypes } from '../actions/index.js';
import style from '../styles/PokemonCreated.module.css';


function validate(input) {
	let errors = {};
	if(!input.name) {
		errors.name = 'Name required'
	}
	 return errors;
};


export default function PokemonCreated() {

	const dispatch = useDispatch();
	const history = useHistory();

	const types = useSelector(state => state.types).sort((a,b) => {
		if(a.name > b.name) {
			return 1;
		}
		if(b.name > a.name) {
			return -1;
		}
		return 0;
	});

	const [errors, setErrors] = useState({});
	const [input, setInput] = useState({
		name: '',
		hp: '',
		attack: '',
		defense: '',
		speed: '',
		height: '',
		weight: '',
		image: '',
		types: []
	})

	function handleChange(e) {
		setInput({
			...input,
			[e.target.name] : e.target.value
		});
		setErrors(validate({
			...input,
			[e.target.name] : e.target.value
		}));
	};

	function handleSelect(e) {
		if(!input.types.includes(e.target.value)) {
			setInput({
				...input,
				types: [...input.types, e.target.value]
			});
		};
	};

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(postPokemons(input));
		alert('Pokemon created successfully!');
		setInput({
			name: '',
			hp: '',
			attack: '',
			defense: '',
			speed: '',
			height: '',
			weight: '',
			image: '',
			types: []
		});
		history.push('/pokemons');
	};

	function handleDelete(e) {
		setInput({
			...input,
			types: input.types.filter( p => p !== e)
		});
	};
	useEffect(() => {
		dispatch(getTypes());
	}, [dispatch]);

	return(
		<div className={style.cont}>
			<div className={style.formCont}>
				<Link to={'/pokemons'}>
					<button className={style.but}>Home</button>
				</Link>
				<h1 className={style.title}>Create Pokemon</h1>
				<form onSubmit={e => handleSubmit(e)}>
					<div className={style.formName}>
						<label className={style.name1}>Name</label>
						<input type='text' value={input.name} name='name' onChange={e => handleChange(e)} minlength='4' maxlength='12' required />
						{errors.name && (<p className={style.p1}>{errors.name}</p>)}
					</div>
					<div className={style.formHp}>
						<label className={style.hp1}>Hp</label>
						<input type='number'  value={input.hp} name='hp' onChange={e => handleChange(e)} required />
					</div>
					<div className={style.formAt}>
						<label className={style.at1}>Attack</label>
						<input type='number' value={input.attack} name='attack' onChange={e => handleChange(e)} required />
					</div>
					<div className={style.formDef}>
						<label className={style.def1}>Defense</label>
						<input type='number'  value={input.defense} name='defense' onChange={e => handleChange(e)} required />
					</div>
					<div className={style.formSp}>
						<label className={style.sp1}>Speed</label>
						<input type='number' value={input.speed} name='speed' onChange={e => handleChange(e)} required />
					</div>
					<div className={style.formHe}>
						<label className={style.he1}>Height</label>
						<input type='number'  value={input.height} name='height' onChange={e => handleChange(e)} required />
					</div>
					<div className={style.formWe}>
						<label className={style.we1}>Weight</label>
						<input type='number' value={input.weight} name='weight' onChange={e => handleChange(e)} required />
					</div>
					<div className={style.formImg}>
						<label className={style.img1}>Image</label>
						<input type='text' value={input.image} name='image' onChange={e => handleChange(e)} />
					</div>
					<div className={style.formTyp}>
						<label className={style.typ1}>Type</label>
						<select onChange={e => handleSelect(e)} className={style.typInput} required>
							<option value='' hidden>Select Type</option>
							{
								types.map(e => <option value={e.name} name='types' key={e.id}>{e.name}</option>)
							}
						</select>
					</div>
					<div className={style.e1}>
						{
							input.types.map(e => 
								<div className={style.e11}>
									<button onClick={() => handleDelete(e)} className={style.e112}>X</button>
									<p className={style.e113}>{e}</p>
								</div>)
						}
					</div>
					<div className={style.but1}>
						<button type='submit' className={style.but11}>Create Pokemon</button>
					</div>
				</form>
			</div>
		</div>
		)
};