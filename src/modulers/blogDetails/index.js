import React from 'react'
import styles from './blogDetails.module.scss';
const BlogDetailsImage = '/assets/images/blog-details-banner.png';
export default function BlogDetails() {
    return (
        <div className={styles.blogDetailsAlignment}>
            <div className='container-md'>
                <div className={styles.blogImage}>
                    <img src={BlogDetailsImage} alt='BlogDetailsImage' />
                </div>
            </div>
        </div>
    )
}
