import React from 'react'
import styles from './home.module.css'
import bioPic from './photos/Blue Hair Booba.jpg'

function BiographyTile() {

	return(
		<div className={styles.contentTiles}>
			<a href='/biography'>
				<img className={styles.eyeCandy} src={bioPic} />
				<h3>
					Biography
				</h3>
			</a>
		</div>
		);
	
}

export default BiographyTile;