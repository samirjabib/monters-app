import './App.css'
import { Component } from 'react'


class App extends Component{ //Componente Funcional 
  constructor(){
    super();

    this.state ={
      monsters:[],
      searchString:[]
    }
    

  }

  componentDidMount(){
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        () => {
        return {monsters: users}
        },
      ))
      
  }

  render(){


    const filteredMonster = this.state.monsters.filter(monster => {
      return monster.name.includes(this.state.searchString);
    })


    return(

      <div className='App'>
        <input 
          className='search-box' 
          placeholder='search monster' 
          type='search' 
          onChange={ 
            (event) => {
              console.log(event.target.value)
              const searchString = event.target.value.toLocaleLowerCase()
              
              this.setState(() => {
                return { searchString }
              })
              }}/>
        {
          filteredMonster.map( (monster) => {
            return (
              <h1 key={monster.name}>
              {monster.name}
              </h1>
            )
          })
        }
      </div>
    )
  }
}

export default App
