import React, { FC } from 'react';
import styles from './BlogPostItem.module.scss';
import { IPost } from '../../types/types';


interface BlogPostItemProps{
    post: IPost
}


const BlogPostItem: FC<BlogPostItemProps> = ({post}) => {

    console.log(post);

    return (
        <div>
            
        </div>
    );
};

export default BlogPostItem;