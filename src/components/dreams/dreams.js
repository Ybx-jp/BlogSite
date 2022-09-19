import React from 'react'
import DreamsContent from './dreamscontent.js'
import styles from './dreams.module.css'

function Dreams() {


	return (
		<div className={styles.bg}>
			<h2>
				Dreams
			</h2>
			<br></br>
			<DreamsContent />
			<a href='/home'>
				<h2>
					Return to Home
				</h2>	
			</a>	
		</div>
		);
}

export default Dreams;