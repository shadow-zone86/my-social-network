import React from 'react'
import Post from './Post/Post'
import classes from './Posts.module.css'

const Posts = (props) => {
    let content = props.data.dataPost.map((variable, index) => {
        return (
            <Post message={ variable.message } image={ variable.image } like={ variable.like } alt={ variable.alt } key={ index } />
        )
    })
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost()
    }
    let onChangePost = () => {
        let text = newPostElement.current.value
        props.updatePost(text)
    }
    return (
        <div className={ classes.description }>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={ onChangePost } ref={ newPostElement } value={ props.data.newPostText } />
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