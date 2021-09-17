import './App.css'
import Dialog from './components/Dialog/Dialog'
import Header from './components/Header/Header'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/Nav'
import News from './components/News/News'
import Profile from './components/Profile/Profile'
import Setting from './components/Setting/Setting'
import { BrowserRouter, Route } from 'react-router-dom'

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile' render={ () => <Profile dataPost={ props.state.profilePage } addPost={ props.addPost } updatePost={ props.updatePost } /> } />
          <Route path='/dialog' render={ () => <Dialog dataUser={ props.state.messagePage.dataUser } dataMessage={ props.state.messagePage.dataMessage } newMessageText={ props.state.messagePage.newMessageText } addMessage={ props.addMessage } updateMessage={ props.updateMessage } /> } />
          <Route path='/news' component={ News } />
          <Route path='/music' component={ Music } />
          <Route path='/setting' component={ Setting } />
        </div>
      </div>
    </BrowserRouter>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
    */
  )
}

export default App