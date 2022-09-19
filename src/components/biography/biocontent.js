import React from 'react'
import styles from './biography.module.css'
import img from './Cute Headphone 03.jpg'

function DreamsContent() {
	return(
		<div>
			<img className={styles.eyeCandy} src={img} />
			<p className={styles.para}>
				Here I'll talk about what I hope to
				achieve by building the website and
				making this portfolio of projects
				I'll be forced to tell everybody about
				in order to gain any traction towards
				achieving my dreams.
			</p>		
		</div>
		);
}

export default DreamsContent;