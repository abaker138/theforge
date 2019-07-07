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
						</p>
						<p className='para'>
							At The Forge, we take it back to the Iron Age.
						</p>
						<p className='para'>
							Primitive. Physical. Paleo. Archaic.
						</p>
						<p className='para'>
							Step into The Forge to learn about the beginnings of what is known as Blacksmithing or Traditional Forging. Become a Farrier for a day and take home what you created with your own hands, manipulating metal to bend it’s knee and bow to your will. 
						</p>
							Take charge at The Forge.

				</div>

				<div className='contactform' >

					<div className='contacttitle'>
						<h4 className='centertext'>Contact us!</h4>
						<p className='centertext' >Custom orders, suggestions, questions!</p>
					</div>

				<form name="contact" method="post" >
						<div class="form-group">
					    <label for="exampleFormControlInput1">Name</label>
					    <input name="name" type="textarea" class="form-control" id="exampleFormControlInput1" placeholder="John Snow" />
					 	</div>


					  <div class="form-group">
					    <label for="exampleFormControlInput1">Email address</label>
					    <input name='email' type="email" class="form-control" id="exampleFormControlInput1" placeholder="johnsnow@got.com" />
					  </div>


					  <div class="form-group">
					    <label for="exampleFormControlTextarea1">What can we do for you?</label>
					    <textarea name='message' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
					  </div>

					 <p>
					    <button type="submit">Send</button>
					 </p>

					<input type="hidden" name="form-name" value="contact" />

				</form>

				</div>


			</div>

		)
}

export default Body