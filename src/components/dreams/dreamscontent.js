import React from 'react'
import styles from './dreams.module.css'
import img from './Cute Headphone 03.jpg'

function DreamsContent() {
	return(
		<div>
			<a className={styles.music} href='https://youtu.be/21fExl6hoe8?list=RD21fExl6hoe8' target="_blank">
				<img className={styles.eyeCandy} src={img} />
			</a>
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