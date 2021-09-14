import React from 'react'
import Post from './Post/Post'
import classes from './Posts.module.css'

const Posts = () => {
    return (
        <div>
            my post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post />
            </div>
        </div>
    )
}

export default Posts