import './App.css'
import { Component } from 'react'


class App extends Component{ //Componente Funcional 
  constructor(){
    super();

    this.state ={
      monsters:[]
    }
    console.log('1')
  }

  componentDidMount(){
    console.log('3')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        () => {
        return {monsters: users}
        },
        () => {
          console.log(this.state.monsters)
        }
        
      ))
      
  }

  render(){
    console.log('2')
    return(

      <div className='App'>
        {
          this.state.monsters.map( (monster) => {
            return <h1 key={monster.name}>{monster.name}</h1>
          })
        }
      </div>
    )
  }
}

export default App
