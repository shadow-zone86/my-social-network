import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialog.module.css'

const Dialog = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                <div className={classes.item + ' ' + classes.active}>
                    <NavLink to='/dialog/1'>Shadow zone</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialog/2'>The doctor</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialog/3'>Wolf</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialog/4'>Dachshund</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialog/5'>Tiger</NavLink>
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