import React from 'react'
import styles from './home.module.css'

function AuthorText() {
	
	return(
		<div>
			<p className={styles.authorText}>
				Thanks for checking out my website!
			</p>
			<p className={styles.authorText}>
				This is the first stop on my web development
				learning journey! I built the site using React
				(totally overkill I realize) and CSS modules. I haven't
				had any exposure to either technology before
				putting this together, so I've learned a lot about
				how technologies work together to build websites and
				gained some experience problem solving with 
				technical solutions to achieve creative results.
			</p>
			<p className={styles.authorText}>
				Please click around and explore my other work (when it arrives!)
				and learn about where I've been and where I'm going!
			</p>
		</div>
		);
}

export default AuthorText;