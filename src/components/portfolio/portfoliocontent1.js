import React from 'react'
import styles from './portfolio.module.css'
import img from './Heart Glasses Wink.jpg'

function PortfolioContent1() {
	return(
		<div>
			<a className={styles.music} href='https://youtu.be/21fExl6hoe8?list=RD21fExl6hoe8' target="_blank">
				<img className={styles.eyeCandy} src={img} />
			</a>
			<p className={styles.para}>
				Then I'm going to probably have a
				little content module for each project
				once I have a couple. Should have some
				pictures, videos maybe, key takeaways.
			</p>		
		</div>
		);
}

export default PortfolioContent1;