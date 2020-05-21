const express = require("express")
const app = express()

app.get('/', function(req, res){
	res.send('Bem vindo ao meu app web')
})

app.get('/inicio', function(req, res){
	res.send('Inicio do meu app web')
})

app.get('/param/:nome', function(req, res){
	res.send('Seu nome e ' + req.params.nome)
})


app.listen(8081, function(){
	console.log("Servidor rodando no http://localhost:8081")
})
