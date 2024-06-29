// variables para conectarse a la base de datos
const mongoose = require('mongoose')
const url_db = 'mongodb://localhost:27017/Floreria'

// conectarse a la base de datos
mongoose.connect(url_db)
    .then(() => {
        console.log('Conexión exitosa')
    })
    .catch((err) => {
        console.log('Conexión fallida')
    })

// esquema de la base de datos
const esquema_flor = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    color: {
        type: String
    },
    waterNeeds: {
        type: String
    },
    maintenance: {
        type: String
    }
})

// creando tabla
const modelo_flor = new mongoose.model("Tabla de flores", esquema_flor)

modelo_flor.create({
    name: "Magnolia",
    type: "Shrubs",
    color: "white, purple, pink and yellow",
    waterNeeds: "average",
    maintenance: "low"
})