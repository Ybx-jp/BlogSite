import React from 'react'
import styles from './home.module.css'
import blogsPic from './photos/String Bikini Ball.jpg'

function BlogsTile() {

	return(
		<div className={styles.contentTiles}>
			<a href='/blogs'>
				<img className={styles.eyeCandy} src={blogsPic} />
				<h3>
					Blogs
				</h3>
			</a>
		</div>
		);
	
}

export default BlogsTile;