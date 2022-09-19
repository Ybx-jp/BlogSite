import React from 'react'
import styles from './home.module.css'
import dreamsPic from './photos/Beache Babe Waves.jpg'

function DreamsTile() {
	

	return(
		<a href='/dreams'>
			<img className={styles.eyeCandy} src={dreamsPic} />
			<h3>
				Dreams
			</h3>
		</a>
		);
}

export default DreamsTile