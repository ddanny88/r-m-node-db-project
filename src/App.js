import React, { Component } from 'react';
import './App.css';

import Main from './components/Characters/Main';
import Header from "./components/Characters/Header";
import Fav from './components/Characters/Favs/Fav'


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      favorites: []
    }
    this.setFav = this.setFav.bind(this);
  }

  setFav(arr){
    this.setState({
      favorites: arr.slice()
    })
  }


  render() {
    return (
      <div>
        <Header/>
        <Fav 
          favorites={this.state.favorites}
          setFav={this.setFav}
        />
        <Main 
          setFav={this.setFav}
        />
      </div>
    );
  }
}


