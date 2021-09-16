import React from 'react'
import Message from './Message/Message'
import Users from './Users/Users'
import classes from './Dialog.module.css'

let dataUser = [
    { id: 1, name: 'Shadow zone' },
    { id: 2, name: 'The doctor' },
    { id: 3, name: 'Wolf' },
    { id: 4, name: 'Thunder' },
    { id: 5, name: 'Porsche' }
]

let dataMessage = [
    { id: 1, message: 'Angular.js' },
    { id: 2, message: 'React.js' },
    { id: 3, message: 'Vue.js' }
]

let users = dataUser.map((user) => {
    return (
        <Users name={user.name} id={user.id} />
    )
})

let messages = dataMessage.map((message) => {
    return (
        <Message message={message.message} />
    )
})

const Dialog = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                { users }
            </div>
            <div className={classes.messages}>
                { messages }
            </div>
        </div>
    )
}

export default Dialog