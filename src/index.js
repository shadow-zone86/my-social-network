import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

let dataPost = [
  { id: 1, message: "Hello world", image: "https://im0-tub-ru.yandex.net/i?id=7abd6330d0e762b7004822896c8ab501&n=13&exp=1", like: 46, alt: "icon" },
  { id: 2, message: "It's my life", image: "https://i.pinimg.com/originals/ae/1e/e3/ae1ee36bc38cebcc8d3d9f1691b715dd.jpg", like: 86, alt: "icon" },
  { id: 3, message: "Show must go on", image: "https://im0-tub-ru.yandex.net/i?id=4665761d0e170bec4bc26d3d37d09b34&n=13&exp=1", like: 88, alt: "icon" },
  { id: 4, message: "Whenever", image: "https://im0-tub-ru.yandex.net/i?id=29d9d1e851b7371776fdef36cdcc3c20&n=13&exp=1", like: 27, alt: "icon" }
]

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

ReactDOM.render(
  <React.StrictMode> 
    <App dataPost={ dataPost } dataUser={ dataUser } dataMessage={ dataMessage } /> 
  </React.StrictMode>, 
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()