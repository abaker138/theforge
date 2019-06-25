import React from 'react';
import './Nav.css'
import anvil from './anvil.png'

const Nav = () => {
	return (
		<div className='nav'>
			<h3 id='title'> THE FORGE </h3>
			<img className='logo' src={anvil} />
			<ul className='options'>
				<li>Home</li>
				<li>About Us</li>
				<li>Lessons</li>
			</ul>


		</div>
		)
}

export default Nav;