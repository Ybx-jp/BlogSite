import React from 'react'
import styles from './biography.module.css'
import img from './photos/BoobaBeachModel.jpg'

function BioContent1() {
	return(
		<div>
			<a className={styles.music} href='https://youtu.be/21fExl6hoe8?list=RD21fExl6hoe8' target="_blank">
				<img className={styles.eyeCandy} src={img} />
			</a>
			<p className={styles.para}>
				Talk about my story, probably beginning with
				how I haplessly ended up way in over my head
				designing a development workflow for a startup
				as an intern with no experience.
			</p>
		</div>
		);
}

export default BioContent1;