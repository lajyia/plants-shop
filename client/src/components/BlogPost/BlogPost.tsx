import React, { FC } from 'react';
import BlogPostList from '../BlogPostList/BlogPostList';
import styles from './BlogPost.module.scss';
import { IPost } from '../../types/types';


const BlogPost: FC = () => {

    const posts = [
        {
            date: '6 September',
            time: '6',
            title: 'dfj',
            body: 'dji',
            picture: 'sfojif',
            _id: 'rkkkd'
        }
    ]

    return (
        <div className={styles.blog_post}>
            <div className={styles.blog_body}>
                <div className={styles.blog_title}>Our Blog Posts</div>
                <div className={styles.blog_text}>We are an online plant shop offering a wide range of cheap and trendy plants</div>
            </div>
            <BlogPostList posts={posts}/>
        </div>
    );
};

export default BlogPost;