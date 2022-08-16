import './App.css'
import { Component } from 'react'


class App extends Component{ //Componente Funcional 
  constructor(){
    super();

    this.state ={
      monsters:[],
      searchString:[],
    }
    

  }

  componentDidMount(){
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        () => {
        return {monsters: users}
        },
      ));
  };

  onSearchChange = (event) => {
    console.log(event.target.value)
    const searchString = event.target.value.toLocaleLowerCase()
  
    this.setState(() => {
      return { searchString }
    });
  };

  render(){


    const {monsters,searchString} = this.state;
    const { onSearchChange } = this;



    const filteredMonster = monsters.filter(monster => {
      return monster.name.includes(searchString);
    });


    return(

      <div className='App'>
        <input 
          className='search-box' 
          placeholder='search monster' 
          type='search' 
          onChange={ onSearchChange  }/>
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
