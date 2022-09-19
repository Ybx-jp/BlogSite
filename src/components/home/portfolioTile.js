import React from 'react'
import styles from './home.module.css'
import portPic from './photos/Rainbow Snort.jpg'

function PortfolioTile() {
	
	return(
		<a href='/portfolio'>
			<img className={styles.eyeCandy} src={portPic} />
			<h3>
				Portfolio
			</h3>
		</a>
	);
}

export default PortfolioTile;