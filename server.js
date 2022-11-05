const express = require("express");
const fs = require("fs");
const app = express()
const port = 3000;

const { v4: uuidv4 } = require('uuid');

app.use(express.json());

app.get('/', (req, res)=>{

     try {
         res.sendFile(__dirname + '/index.html' )
 
     } catch (error) {
         console.log(error)
     }
     
 })

async function registrarUsuario(nombre, balance) {

const nuevaID = await uuidv4();
const usuarios = await fs.readFileSync('./usuarios.json', 'utf-8')
const listadoUsuarios = await JSON.parse(usuarios)
const nuevoUsuario = {'nombre': nombre, 'balance': balance, 'id': nuevaID}
listadoUsuarios.push(nuevoUsuario)

fs.writeFileSync(`./usuarios.json`, JSON.stringify(listadoUsuarios))
console.log("Nuevo usuario agregado")}

app.post('/usuario', (req, res) => {

    console.log('Status Code: '+res.statusCode);
    console.log(req.body);
    
    try {
        const {nombre, balance} = req.body;
        (registrarUsuario(nombre, balance));
        
    
    } catch (error) {
        console.log(error)
    

}})


app.get('/usuarios', (req, res) => {

})

app.put('/usuario', (req, res) => {


})

app.delete('/usuario', (req, res) => {


})

app.post('/transferencia', (req, res) => {


})

app.get('/transferencias', (req, res) => {


})

app.listen(port, () =>{
    console.log(`Se levantó el servidor en el puerto ${port}`)
})