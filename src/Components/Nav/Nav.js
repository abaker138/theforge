import React from 'react';
import './Nav.css'
import anvil from './anvil.png'
import fblogo from './facebooklogo.png'
import instalogo from './instalogo.png'


const Nav = () => {
	return (
		<div className='nav'>
			<h3 id='title'> THE FORGE </h3>
			<img className='logo' src={anvil} />
			<ul className='options'>
				
		<div className='facebook'>	

				<li><a href='https://www.facebook.com/theforgeutah/' target="_blank">
				<img src={fblogo} /></a></li>

		</div>

		<div className='facebook'>	

				<li><a href='https://instagram.com/theforgeutah?igshid=x5bbg7pq6nk5' target="_blank">
				<img src={instalogo} /></a></li>

		</div>
				<li>About Us</li>
				<li>Lessons</li>
			</ul>


		</div>
		)
}

export default Nav;