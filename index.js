const express = require('express');

const app = express();

const path = require('path');
const router = express.Router();

router.get('/sobre',function(req,res){
    res.sendFile(path.join(__dirname +'/sobre.html'));
})

app.use('/',router);

app.listen(process.env.port || 3000);

console.log("Server rodando perfeitamente")

// Request do servidor http

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Conexão realizada com sucesso!')

});

// Verificando se o servidor foi conectado
server.listen(port,hostname, () => {
    console.log('Servidor rodando com sucesso!')
});