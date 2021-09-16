import React from 'react'
import classes from './Music.module.css'
import music from '../../nautilus-pompilius.mp3'

const Music = () => {
    return (
        <div className={classes.item}>
            <audio src={music} controls></audio>
        </div>
    )
}

export default Music