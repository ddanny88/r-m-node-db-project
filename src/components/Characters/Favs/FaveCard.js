import React from 'react';
import axios from 'axios';
import './faveCard.css'


const FaveCard = (props) =>{
    return (
        <div className="fave_card">
            <img className="char_image"src={props.img}/>
            <h2>{props.name}</h2>
            <button className="big_button" onClick={()=>{
                axios.delete(`/api/characters/${props.id}`)
                .then((response)=>{
                    props.setFav(response.data)
                })
            }}>Delete</button>
        </div>
    )
}

export default FaveCard;