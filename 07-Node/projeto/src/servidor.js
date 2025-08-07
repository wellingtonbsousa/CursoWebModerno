const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

//app.get('/produtos', (req, res, next) => {
//    console.log('Middleware 1...')
//    next()
//})
app.get('/produtos', (req, res, next) => {
    // res.send({ nome: 'Notebook', preco: 123.45 }) // Resposta convertida para JSON
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (res, req, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

//app.use((req, res, next) => { // obtem respostas para qualquer nome (nao precisa produtos)
//    res.send({ nome: 'Notebook', preco: 123.45 })
//})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})
