import React, { Component } from 'react';
import axios from 'axios';
import Character from './Character'
import './main.css'



export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            characters: [],
            favorites: [],
            userInput: ''
        }

        this.addToFavs = this.addToFavs.bind(this);
        this.deleteFav = this.deleteFav.bind(this);
        this.updateCharacters = this.updateCharacters.bind(this)
    }

    componentDidMount(){
        axios.get("/api/characters")
        .then( response => {
            this.setState({
                characters: response.data
            })
        }).catch(err=> console.log(err))
    }

    updateCharacters(val){
        this.setState({
            characters: val
        })
    }
  

    addToFavs(id){
        axios.post("/api/favs", {"id": id})
        .then( response =>{
            this.setState({
                favorites: response.data
            })
            this.props.setFav(response.data)
        }).catch(err=> console.log(err))
    }


    deleteFav(id){
        axios.delete(`/api/characters/${id}`)
        .then( response => {
            this.setState({
                favorites: response.data
            })
        }).catch(err=> console.log(err))
    }





    render(){
        let characters = this.state.characters.map((char)=> {
            return <Character
            updateChar={this.updateCharacters}
            id={char.id}
            key={char.id}
            addFav={this.addToFavs} 
            name={char.name}
            img={char.image}
            />
        })
    console.log(characters)
       return(
           <div>
                <div className="card-container">
                    {characters}
                </div>
           </div>
         
       )
    }
}