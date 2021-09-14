import React from 'react'
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
            <div>
                my post
                <div>
                    new post
                </div>
                <div>
                    <div className={classes.item}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile