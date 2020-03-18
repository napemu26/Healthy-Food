import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export default function DesktopNavbar() {
	return (
		<div className='container'>
			<nav className='nav-container'>
				<div className='logo'>Healthy Food</div>

				<ul className='nav-links'>
					<li>
						<Link className='link' to='/recipes'>
							HEALTHY RECIPES
						</Link>
					</li>
					<li>
						<Link className='link' to='/blog'>
							BLOG
						</Link>
					</li>
					<li>
						<Link className='link' to='/join'>
							JOIN
						</Link>
					</li>
					<li>
						<button>Register</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}
