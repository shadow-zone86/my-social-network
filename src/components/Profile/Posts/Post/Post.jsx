import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.image} />
            {props.message}
            <div>
                <span className={`${classes.item} ${classes.like}`}>like - {props.like}</span>
            </div>
        </div>
    )
}

export default Post