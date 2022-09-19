import React from 'react'
import PortfolioContent from './portfoliocontent.js'
import PortfolioContent1 from './portfoliocontent1.js'
import styles from './portfolio.module.css'


function Portfolio() {


	return(
		<div className={styles.bg}>
			<h2>
				Portfolio
			</h2>
			<br></br>
			<PortfolioContent />
			<PortfolioContent1 />
			<a href='/home'>
				<h2>
					Return to Home
				</h2>	
			</a>
		</div>
		);
}

export default Portfolio;