import React, { Component } from 'react';
import './character.css'
import axios from 'axios';


export default class Character extends Component{
    constructor(){
        super();
        this.state ={
            toggle: false,
            userInput:''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        
        this.setState({
            toggle: false
        })
        console.log(this.props.id)
        axios.put(`/api/edit/${this.props.id}`, {"name": this.state.userInput})
        .then(response=> {
           this.props.updateChar(response.data) 
        }).catch((err)=>console.log("error", err))
    }

    render(){
        return (
            <div className="char-card">
                <img className="char_image" src={this.props.img}/>
                <h2>{this.props.name}</h2>
    
                <button className="big_button" onClick={()=>this.props.addFav(this.props.id)}>Add</button>


                <button className="big_button" onClick={()=>this.setState({
                    toggle: true
                })}>Edit</button>
                {this.state.toggle? <input 
                    className="input"
                    placeholder="  enter name"
                    onChange={(e)=> this.setState({
                        userInput: e.target.value
                    })}
                />: null}
                {this.state.toggle? <button className="big_button" onClick={()=> this.handleClick()}>Submit</button>
                :null}
            </div>
        )
    }
}