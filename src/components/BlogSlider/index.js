import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ImgComp from './ImgComp'

import './index.scss'
import img1 from '../../img/blog_image_1.svg'
import img2 from '../../img/bloco_image_2.svg'
import img3 from '../../img/bloco_image_3.svg'
import img4 from '../../img/bloco_image_4.svg'

function Slider() {
	const sliderArr = [
		<ImgComp className='imgs' src={img1} />,
		<ImgComp className='imgs' src={img2} />,
		<ImgComp className='imgs' src={img3} />,
		<ImgComp className='imgs' src={img4} />,
	]
	const [x, setX] = useState(0)

	const goLeft = () => {
		console.log(x)
		x === 0 ? setX(-100 * (sliderArr.length - 3)) : setX(x + 100)
	}

	const goRight = () => {
		x === -100 * (sliderArr.length - 3) ? setX(0) : setX(x - 100)
		console.log(x)
	}

	return (
		<div className='slider'>
			{sliderArr.map((item, index) => {
				return (
					<div
						key={index}
						className='slide'
						style={{ transform: `translateX(${x}%)` }}
					>
						<div className='img-post'>{item}</div>

						<Link className='post-tittle' to='/'>
							Post Tittle
						</Link>
						<span className='post-author'>Post Author</span>
					</div>
				)
			})}
			<button id='goLeft' onClick={goLeft}>
				<i className='fas fa-arrow-circle-left'></i>
			</button>
			<button id='goRight' onClick={goRight}>
				<i className='fas fa-arrow-circle-right'></i>
			</button>
		</div>
	)
}

export default Slider
