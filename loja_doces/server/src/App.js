import express from 'express'; //Importanto o express
import CategoriaController from './Controllers/CategoriaController.js';
import DoceController from './Controllers/DoceController.js';
const server = express(); //Iniciando o express

server.use(express.json()) //Configurando o json

server.get('/', (req,res)=>{
    res.status(200).json("Servidor Funcionando :)")
})


server.get('/categorias', CategoriaController.read);
server.post('/categorias', CategoriaController.create);
server.put('/categorias/:id_cat', CategoriaController.update);
server.delete('/categorias/:id_cat', CategoriaController.delete)


server.get('/doces', DoceController.read);
server.post('/doces', DoceController.create);
server.put('/doces/:id_doce', DoceController.update);
server.delete('/doces/:id_doce', DoceController.delete)

server.listen(5000);