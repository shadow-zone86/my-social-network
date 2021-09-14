import React from 'react'
import classes from './Post.module.css'

const Post = () => {
    return (
        <div className={classes.item}>
            <img src='https://im0-tub-ru.yandex.net/i?id=7abd6330d0e762b7004822896c8ab501&n=13&exp=1' />
            Hello World
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post