import React, { FC } from 'react';
import { IPost } from '../../types/types';
import BlogPostItem from '../BlogPostItem/BlogPostItem';


interface BlogPostListProps{
    posts: IPost[]
}


const BlogPostList:FC<BlogPostListProps> = ({posts}) => {

    return (
        <div>
            {posts.map(post => 
                <BlogPostItem post={post}/>
            )}
        </div>
    );
};

export default BlogPostList;