import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { addPost, updatePost, addMessage, updateMessage } from './state/index'

export let renderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode> 
            <App state={ state } addPost={ addPost } updatePost={ updatePost } addMessage={ addMessage } updateMessage={ updateMessage } /> 
        </React.StrictMode>, document.getElementById('root')
    )
}