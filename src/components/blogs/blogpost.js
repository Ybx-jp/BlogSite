import React from 'react'
import styles from './blogs.module.css'
import img from './photos/Sporty Skirt Booba.png'

function BlogPost() {
	
	return(
		<div>
			<a className={styles.music} href='https://youtu.be/21fExl6hoe8?list=RD21fExl6hoe8' target="_blank">
				<img className={styles.eyeCandy} src={img} />
			</a>
			<p className={styles.para}>
				blog text here.
			</p>
		</div>
		);

}

export default BlogPost;