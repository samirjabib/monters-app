import { Component } from "react";
import './card.styles.css'

class Card extends Component{
    render(){
        const {name, email, id} = this.props
        return(
            <div className="card-container" key={id}> 
                <h1>{name}</h1>
                <img alt="img-monster" src={`https://robohash.org/${id}?set=set2`}/>
                <h2>{email}</h2>                        
            </div>
        )
    }
}

export default Card