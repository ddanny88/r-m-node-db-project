const axios = require('axios');


let characters = [];
let favorites = [];


const getCharacters = (req, res, next)=>{
    // console.log("test")
    axios.get("https://rickandmortyapi.com/api/character/")
    .then( response => {
        // console.log(response)
        characters = response.data.results
        res.status(200).json(characters)
        // console.log(characters)
    })
}


const getFavorite = (req, res, next) =>{
    res.status(200).json(favorites)
}

const addCharacter = (req, res, next) =>{
    let index = characters.findIndex((char)=> +char.id === +req.body.id)
    let character = characters[index]
    favorites.push(character)
    res.status(200).json(favorites)
}
const deleteCharacter = (req, res, next) =>{
    let index = favorites.findIndex(char => +char.id === +req.params.id)
    favorites.splice(index, 1)
    res.status(200).json(favorites)
}

const updateCharacter = (req, res, next) =>{
    console.log("working")
    let index = characters.findIndex((char)=>{
        return +char.id === +req.params.id
    })
    // const index = characters.findIndex(char => char.id === +req.params.id);
    if(index === -1){
        console.log("no char found with id of " + req.params.id)
        res.status(400).json({error: "no char found with id of " + req.params.id})
        return 
    }
    console.log("we made it here ")
    // res.status(200).json(characters[index] = req.body)
    let character = characters[index]
    Object.assign(character, req.body)
    characters[index]  = character
    res.json(characters)
}

module.exports = {
    getCharacters,
    getFavorite,
    addCharacter,
    deleteCharacter,
    updateCharacter
    
}