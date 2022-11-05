import app from './app.js'
import { sequelize } from './database/database.js'
import "./models/Usuario.js"
import "./models/Transferencia.js"



async function main() {

try{
//await sequelize.authenticate();

//console.log("Conexión exitosa.");
await sequelize.sync({force: false})
app.listen(3000);
console.log("Se levantó el servidor en el puerto " + 3000)
} catch (error){
    console.log("Error al conectarse a la base de datos: " + error)
}}



main();