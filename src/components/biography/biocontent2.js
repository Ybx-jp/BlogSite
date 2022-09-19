import React from 'react'
import styles from './biography.module.css'
import img from './photos/Tongue Tie Skirt Girl.jpg'

function BioContent2() {
	return(
		<div>
			<a className={styles.music} href='https://youtu.be/21fExl6hoe8?list=RD21fExl6hoe8' target="_blank">
				<img className={styles.eyeCandy} src={img} />
			</a>
			<p className={styles.para}>
				Could follow it up with other examples of how
				I'm so special and such a hard worker and shit.
			</p>
		</div>
		);
}

export default BioContent2;