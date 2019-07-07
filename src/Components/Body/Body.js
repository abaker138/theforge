import React from 'react';
import strike from './hammeringsteel.png'
import './Body.css'


const Body = () => {
	return (
			<div className='main-body' >
				
				<div>
					<img alt='' className='background' src={strike} />
				</div>

				<div className='peek'>
						<a className='link peekLink' 
						href="https://www.peek.com/s/a4cbef24-2211-441c-b5ac-ddbf777d984c/rxE0Y"  
						data-button-text="Book Now">
						Knife Making Classes</a>
				</div>

				<div className='aboutUs'>
						<h2> About us </h2>
						<p className='para'>
							Since the dawn of time, man has learned and developed to use tools to his advantage. 
							Starting with a simple hammer, the evolution of technology has grown into manufacturing plants, spurting out products by the masses. We use machine-made items everyday, but do we REALLY know how it came about?

							At The Forge, we take it back to the Iron Age.

							Primitive. Physical. Paleo. Archaic.

							Step into The Forge to learn about the beginnings of what is known as Blacksmithing or Traditional Forging. Become a Farrier for a day and take home what you created with your own hands, manipulating metal to bend it’s knee and bow to your will. 

							Take charge at The Forge.
 </p>
				</div>


			</div>

		)
}

export default Body