import React from 'react'
import BioContent1 from './biocontent1'
import BioContent2 from './biocontent2'
import BioContent3 from './biocontent3'
import styles from './biography.module.css'

function Biography() {
	
	return(
		<div className={styles.bg}>
			<a href='/home'>
				<h2>
					Biography
				</h2>
			</a>
			<br></br>
			<div className={styles.content}>
				<BioContent1 />
				<BioContent2 />
				<BioContent3 />				
			</div>
			<a href='/home'>
				<h2>
					Return to Home
				</h2>	
			</a>
		</div>
	);
}

export default Biography;