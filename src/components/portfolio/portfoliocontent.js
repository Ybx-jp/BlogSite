import React from 'react'
import styles from './portfolio.module.css'
import img from './Miku Panties.jpg'

function PortfolioContent() {
	return(
		<div>
			<a className={styles.music} href='https://youtu.be/21fExl6hoe8?list=RD21fExl6hoe8' target="_blank">
				<img className={styles.eyeCandy} src={img} />
			</a>
			<p className={styles.para}>
				Here I'll probably talk about my
				key achievements and takeaways from
				my project experiences.
			</p>		
		</div>
		);
}

export default PortfolioContent;