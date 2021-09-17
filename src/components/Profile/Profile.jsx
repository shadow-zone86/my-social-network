import React from 'react'
import Posts from './Posts/Posts'
import Info from './Info/Info'
//import classes from './Profile.module.css'

const Profile = (props) => {
    return (
        <div>
            <Info />
            <Posts data={ props.dataPost } addPost={ props.addPost } />
        </div>
    )
}

export default Profile