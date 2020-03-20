import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'
export default function Footer() {
	return (
		<div className='footer-container'>
			<div className='footer'>
				<span className='copy'>
					© Copyrights 2019 Stack. All Rights Reserved.
				</span>
				<div>
					<Link className='terms' to='/'>
						Privacy Policy
					</Link>
					<Link className='terms' to='/' style={{ marginLeft: 20 }}>
						Terms and Conditions
					</Link>
				</div>
			</div>
		</div>
	)
}
