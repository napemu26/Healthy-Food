import React from 'react'
//components
import Navbar from '../../components/Navigation/Index'
import GridRecipes from '../../components/GridRecipes/index'
//Style
import './index.css'

export default function Home() {
	return (
		<div className='container'>
			<header className='header-container'>
				<Navbar />
				<div className='form-container'>
					<span className='form-tittle'>Ready for Trying a new recipe? </span>
					<form className='form'>
						<input
							type='text'
							placeholder='Search healthy recipes'
							className='src-input'
						/>
						<button className='btn-search'>
							<i class='fas fa-search'></i>
						</button>
					</form>
				</div>
			</header>

			<div className='recipes-page'>
				<h3 className='recipes-tittle'>Our Best Recipes</h3>
				<p className='recipes-paragraph'>
					Far far away, behind the word mountains, far from the countries
					Vokalia and Consonantia, there live the blind texts.
				</p>
				<GridRecipes />
			</div>

			<div className='services-page'>
				<div className='services-description'>
					<h3 className='services-tittle'>
						The best services ready To serve you
					</h3>
					<p className='services-paragraph'>
						Far far away, behind the word mountains, far from the countries
						Vokalia and Consonantia, there live the blind texts.
					</p>
					<p className='services-paragraph'>
						Separated they live in Bookmarksgrove right at the coast of the
						Semantics, a large language ocean.
					</p>
					<p className='services-paragraph'>
						A small river named Duden flows by their place and supplies it with
						the necessary regelialia.
					</p>
					<button className='services-btn'>Know More</button>
				</div>
			</div>
		</div>
	)
}
