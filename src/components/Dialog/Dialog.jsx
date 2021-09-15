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

const Dialog = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                <Users name={dataUser[0].name} id={dataUser[0].id} />
                <Users name={dataUser[1].name} id={dataUser[1].id} />
                <Users name={dataUser[2].name} id={dataUser[2].id} />
                <Users name={dataUser[3].name} id={dataUser[3].id} />
                <Users name={dataUser[4].name} id={dataUser[4].id} />
            </div>
            <div className={classes.messages}>
                <Message message={dataMessage[0].message} />
                <Message message={dataMessage[1].message} />
                <Message message={dataMessage[2].message} />
            </div>
        </div>
    )
}

export default Dialog