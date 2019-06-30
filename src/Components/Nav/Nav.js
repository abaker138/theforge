import React from 'react';
import './Nav.css'
import forgelogo from './theforgelogo.png'
import fblogo from './facebooklogo.png'
import instalogo from './instalogo.png'


const Nav = () => {
	return (

		<div className='nav'>

			<h3 className='title'> THE FORGE </h3>

			<img alt='logo' className='logo' src={forgelogo} />

			<ul className='options'>
				
					<div>	

							<li><a 
							href='https://www.facebook.com/theforgeutah/' 
							target="_blank"
							rel="noopener noreferrer">
							<img className='navlogo' alt= '' src={fblogo} /></a></li>

					</div>

					<div>	

							<li><a 
							rel="noopener noreferrer"
							href='https://instagram.com/theforgeutah?igshid=x5bbg7pq6nk5' target="_blank">
							<img className='navlogo' alt='' src={instalogo} /></a></li>

					</div>
							<li><a 
							className='link' 
							href="https://www.peek.com/s/a4cbef24-2211-441c-b5ac-ddbf777d984c/rxE0Y"  
							data-button-text="Lessons">Knife Making Class</a></li>
			</ul>


		</div>
		)
}

export default Nav;