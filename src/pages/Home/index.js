import React from 'react'
//components
import Navbar from '../../components/Navigation/Index'
import GridRecipes from '../../components/GridRecipes/index'
import Slider from '../../components/BlogSlider/index'
import Footer from '../../components/Footer/index'
//Style
import './index.scss'

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
							<i className='fas fa-search'></i>
						</button>
					</form>
				</div>
			</header>

			<div className='recipes-page'>
				<h3 className='pages-tittle'>Our Best Recipes</h3>
				<p className='pages-paragraph'>
					Far far away, behind the word mountains, far from the countries
					Vokalia and Consonantia, there live the blind texts.
				</p>
				<GridRecipes />
			</div>

			<div className='services-page'>
				<div className='services-description'>
					<h3 className='pages-tittle'>The best services ready To serve you</h3>
					<p className='pages-paragraph'>
						Far far away, behind the word mountains, far from the countries
						Vokalia and Consonantia, there live the blind texts.
					</p>
					<p className='pages-paragraph'>
						Separated they live in Bookmarksgrove right at the coast of the
						Semantics, a large language ocean.
					</p>
					<p className='pages-paragraph'>
						A small river named Duden flows by their place and supplies it with
						the necessary regelialia.
					</p>
					<button className='services-btn'>Know More</button>
				</div>
			</div>

			<div className='blog-posts'>
				<h3 className='pages-tittle'> Read Our Blog </h3>
				<p className='pages-paragraph'>
					Far far away, behind the word mountains, far from the countries
					Vokalia and Consonantia, there live the blind texts.
				</p>
				{/* BLOG SLIDER COMPONENT */}
				<Slider />
			</div>

			<div className='join-page'>
				<div className='join-description'>
					<span className='form-join-tittle'>
						Join our membership to get special offer{' '}
					</span>
					<form className='form-join'>
						<input
							type='text'
							placeholder='Enter your E-mail adress'
							className='src-input'
						/>
						<button className='join-btn'>Join </button>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	)
}
