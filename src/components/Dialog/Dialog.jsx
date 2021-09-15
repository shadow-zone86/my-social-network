import React from 'react'
import classes from './Dialog.module.css'

const Dialog = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                <div className={classes.item + ' ' + classes.active}>
                    User 1
                </div>
                <div className={classes.item}>
                    User 2
                </div>
                <div className={classes.item}>
                    User 3
                </div>
                <div className={classes.item}>
                    User 4
                </div>
                <div className={classes.item}>
                    User 5
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Comment 1
                </div>
                <div className={classes.message}>
                    Comment 2
                </div>
                <div className={classes.message}>
                    Comment 3
                </div>
            </div>
        </div>
    )
}

export default Dialog