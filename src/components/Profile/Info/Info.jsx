import React from 'react'
import classes from './Info.module.css'

const Info = () => {
    return (
        <div>
            <div>
                <img src="https://im0-tub-ru.yandex.net/i?id=0e1b789955094b4a2b3508762bd2e20c&ref=rim&n=33&w=291&h=164" alt="banner" />
            </div>
            <div className={classes.description}>
                avatar + description
            </div>
        </div>
    )
}

export default Info