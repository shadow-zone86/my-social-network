import React from 'react'
import { NavLink } from 'react-router-dom'

const Users = (props) => {
    let path = '/dialog/' + props.id

    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Users