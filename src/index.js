import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import state, { subscribe } from './state'
import { addPost, updatePost, addMessage, updateMessage } from './state/index'

let renderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode> 
            <App state={ state } addPost={ addPost } updatePost={ updatePost } addMessage={ addMessage } updateMessage={ updateMessage } /> 
        </React.StrictMode>, document.getElementById('root')
    )
}

renderTree(state)

subscribe(renderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()