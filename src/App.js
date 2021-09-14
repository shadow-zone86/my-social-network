import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Nav'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
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