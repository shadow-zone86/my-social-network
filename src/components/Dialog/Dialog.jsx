import React from 'react'
import Message from './Message/Message'
import Users from './Users/Users'
import classes from './Dialog.module.css'

const Dialog = (props) => {
    let users = props.dataUser.map((user, index) => {
        return (
            <Users name={ user.name } id={ user.id } key={ index } />
        )
    })
    let messages = props.dataMessage.map((message, index) => {
        return (
            <Message message={ message.message } key={ index } />
        )
    })
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value
        window.alert(text)
    }
    return (
        <div className={ classes.dialogs }>
            <div className={ classes.users }>
                { users }
            </div>
            <div className={ classes.messages }>
                <div>
                    <textarea ref={ newMessageElement }></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>Add message</button>
                </div>
                { messages }
            </div>
        </div>
    )
}

export default Dialog