import React from 'react'
import styles from './biography.module.css'
import img from './photos/yumemi feet gadgets.jpg'

function BioContent3() {
	return(
		<div>
			<a className={styles.music} href='https://youtu.be/21fExl6hoe8?list=RD21fExl6hoe8' target="_blank">
				<img className={styles.eyeCandy} src={img} />
			</a>
			<p className={styles.para}>
				Other times I overcame pretty difficult things.
				Personal stuff that challenged me academically/professionally.
				Talk about those?
			</p>
		</div>
		);
}

export default BioContent3;