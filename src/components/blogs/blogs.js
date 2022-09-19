import React from 'react'
import styles from './blogs.module.css'
import BlogPost from './blogpost.js'

function Blogs() {
	
	return(
		<div className={styles.bg}>
		<a href='/home'>
			<h2>
				Blog Posts
			</h2>
		</a>
		<br></br>
			<div className={styles.content}>
				<BlogPost />			
			</div>
		<a href='/home'>
			<h2>
				Return to Home
			</h2>	
		</a>
		</div>
	);
}

export default Blogs;