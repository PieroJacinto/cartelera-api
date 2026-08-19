const express = require('express');
const app = express();
const PORT = 3000;

const peliculas = [
    { id: 1, titulo: "Volver al futuro", duracion: 116, apta: true },
    { id: 2, titulo: "El resplandor", duracion: 146, apta: false },
    { id: 3, titulo: "mi vecino totoro", duracion: 96, apta: true },
]

app.get("/", ( req, res ) => {
    res.send("Hola desde el servidor de la cartelera");
})

app.get('/contacto', ( req, res ) => {
    res.send("Cine Rivadavia - av Rivadavia 1234 - telefono: 4444-5555")
})

app.get('/api/peliculas', ( req, res ) => {
    res.json(peliculas)
})

app.get('/api/prueba', ( req, res ) => {
    res.send(404)
})

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);    
})


