import React from 'react'
import Posts from './Posts/Posts'
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://im0-tub-ru.yandex.net/i?id=0e1b789955094b4a2b3508762bd2e20c&ref=rim&n=33&w=291&h=164" alt="banner" />
            </div>
            <div>
                avatar + description
            </div>
            <Posts />
        </div>
    )
}

export default Profile