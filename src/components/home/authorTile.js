import React from 'react'
import styles from './home.module.css'
import authorPic from './photos/JSKitchen.jpg'
import AuthorText from './authortext.js'

function AuthorTile() {

	return(
		<div className={styles.authorTile}>
			<img className={styles.authorPic} src={authorPic} />
			<AuthorText />
		</div>
		);
	
}

export default AuthorTile;