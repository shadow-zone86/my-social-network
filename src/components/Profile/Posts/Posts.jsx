import React from 'react'
import Post from './Post/Post'
import classes from './Posts.module.css'

const Posts = (props) => {
    let content = props.data.map((variable, index) => {
        return (
            <Post message={ variable.message } image={ variable.image } like={ variable.like } alt={ variable.alt } key={ index } />
        )
    })
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }
    return (
        <div className={ classes.description }>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={ newPostElement }></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={ classes.posts }>
                { content }
            </div>
        </div>
    )
}

export default Posts