import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component{
    render() {
        const { onSearchChange } = this.props

        return(
            <input 
              className='search-box' 
              placeholder='search monster' 
              type='search' 
              onChange={ onSearchChange  }/>
        )    
    }
}

export default SearchBox;