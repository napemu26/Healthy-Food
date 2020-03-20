import React from 'react'

import './index.scss'
import BgRecipe1 from '../../img/comida_1.svg'
import BgRecipe2 from '../../img/comida_2.svg'
import BgRecipe3 from '../../img/comida_3.svg'
import BgRecipe4 from '../../img/comida_4.svg'

export default function GridRecipes() {
	return (
		<div className='recipes-container'>
			<div className='recipes'>
				<div
					className='bg-img column'
					style={{ backgroundImage: `url(${BgRecipe1})` }}
				></div>
				<div className='description colum'>
					<span>Broccoli Salad with Bacon</span>
					<button className='recipe-btn'>See Recipe</button>
				</div>
			</div>

			<div className='recipes'>
				<div
					className='bg-img column'
					style={{ backgroundImage: `url(${BgRecipe2})` }}
				></div>
				<div className='description column'>
					<span>Classic Beef Burgers</span>
					<button className='recipe-btn'>See Recipe</button>
				</div>
			</div>

			<div className='recipes'>
				<div
					className='bg-img column'
					style={{ backgroundImage: `url(${BgRecipe3})` }}
				></div>
				<div className='description column'>
					<span>Classic Potato Salad</span>
					<button className='recipe-btn'>See Recipe</button>
				</div>
			</div>

			<div className='recipes'>
				<div
					className='bg-img column'
					style={{ backgroundImage: `url(${BgRecipe4})` }}
				></div>
				<div className='description column'>
					<span>Cherry Cobbler on the Grill</span>
					<button className='recipe-btn'>See Recipe</button>
				</div>
			</div>
		</div>
	)
}
