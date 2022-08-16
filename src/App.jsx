import './App.css'
import { Component } from 'react'


class App extends Component{ //Componente Funcional 
  constructor(){
    super();

    this.state ={
      name:'Yihua'
    }
  }

  render(){
    return(
      <div className='App'>
        <h1>Hello {this.state.name}</h1>
        <button oncClick = { () => {
          this.setState({name:'samir'})
        }}>Change Name</button>

      </div>
    )
  }
}

export default App
