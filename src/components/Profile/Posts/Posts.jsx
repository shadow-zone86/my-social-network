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
            <div className={classes.posts}>
                <Post message="Hello world!" image="https://im0-tub-ru.yandex.net/i?id=7abd6330d0e762b7004822896c8ab501&n=13&exp=1" like="15" />
                <Post message="It's my life" image="https://i.pinimg.com/originals/ae/1e/e3/ae1ee36bc38cebcc8d3d9f1691b715dd.jpg" like="20" />
            </div>
        </div>
    )
}

export default Posts