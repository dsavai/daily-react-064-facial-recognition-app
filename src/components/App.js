import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Facial Recognition App</h1>
  </header>
)
const Game = (props) => (
  <div className='game'>

    

  </div>
)

const Score = () => (
  <div className='score'>

      

  </div>
)

class FacialRecognitionApp extends Component {
  
  state = {
    
  }



  componentDidMount() {
    
  

  }


      render () {
    return (
      <div className='App-container'>

        <Score />
        <Game />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <FacialRecognitionApp />

  </div>
)

export default App

