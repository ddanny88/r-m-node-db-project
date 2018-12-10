const express = require('express');
const { json } = require('body-parser');
const controller = require('./controller')
const app = express();
const port = 3001;

app.use(json())
app.get("/api/characters", controller.getCharacters)
app.get("/api/favs", controller.getFavorite);
app.post("/api/characters", controller.addCharacter);
app.post('/api/favs', controller.addCharacter)
app.delete("/api/characters/:id", controller.deleteCharacter);
app.put("/api/edit/:id", controller.updateCharacter)

// app.put("/api/characters/:id", controller.updateCharacter);




app.listen(port, ()=>{console.log(`Listening on port ${port}...`)})