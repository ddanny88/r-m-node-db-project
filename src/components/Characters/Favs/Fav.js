import React, { Component } from 'react';
import FaveCard from './FaveCard' 
import './fav.css'


export default class Fav extends Component{
    constructor(){
        super();
        this.state ={

        }
    }

    
    render(){
        let favs = null
         if(this.props.favorites){
             favs= this.props.favorites.map((fav)=>{
          return  <FaveCard
                setFav={this.props.setFav}
                img={fav.image}
                name={fav.name}
                id={fav.id}
                key={fav.id}
            />
        })} 

        return (
            <div>
                <h3 className="fav-txt">Favorites: </h3>
                {favs}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}