import React from 'react'
import Message from './Message/Message'
import Users from './Users/Users'
import classes from './Dialog.module.css'

const Dialog = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                <Users name='Shadow zone' id='1' />
                <Users name='The doctor' id='2' />
                <Users name='Wolf' id='3' />
                <Users name='Thunder' id='4' />
                <Users name='Porsche' id='5' />
            </div>
            <div className={classes.messages}>
                <Message message='Angular.JS' />
                <Message message='React.JS' />
                <Message message='Vue.JS' />
            </div>
        </div>
    )
}

export default Dialog