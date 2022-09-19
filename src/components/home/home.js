import React from 'react'
import styles from './home.module.css'
import DreamsTile from './dreamsTile.js'
import PortfolioTile from './portfolioTile.js'
import BiographyTile from './biographyTile.js'
import BlogsTile from './blogsTile.js'
import AuthorTile from './authorTile.js'

function Home() {
	
	return(
		<div className={styles.bg}>
			<h1>
				Welcome to my shitty personal website!
			</h1>
			<br></br>
			<div className={styles.contentTiles}>
				<BiographyTile />
				<PortfolioTile />
				<DreamsTile />
				<BlogsTile />
				<AuthorTile />
			</div>
		</div>
		);
}

export default Home;