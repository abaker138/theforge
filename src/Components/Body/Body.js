import React from 'react';
import strike from './hammeringsteel.png'
import './Body.css'


const Body = () => {
	return (
			<div >
			
				<img alt='' className='main-image' src={strike} />

				<div className='peek'>
						<a className='link' 
						href="https://www.peek.com/s/a4cbef24-2211-441c-b5ac-ddbf777d984c/rxE0Y"  
						data-button-text="Book Now">
						Knife Making Classes</a>
				</div>

				<div className='aboutUs'>
						<h2> About us </h2>
						<p className='para'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse 
						interdum consectetur libero id faucibus nisl tincidunt eget nullam. 
						Suspendisse in est ante in nibh mauris cursus mattis molestie. In mollis 
						unc sed id semper risus. At consectetur lorem donec massa sapien faucibus. 
						ulputate eu scelerisque felis imperdiet proin fermentum. Tellus rutrum tellus 
						llentesque eu tincidunt tortor. Lacus vestibulum sed arcu non odio euismod 
						lacinia at. Nullam non nisi est sit amet facilisis magna etiam. Sollicitudin
						 nibh sit </p>
				</div>


			</div>

		)
}

export default Body