const fs = require('fs')
const { json } = require('stream/consumers')
const caminho = __dirname + '/arquivo.json'

// Leitura Sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Leitura Assincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Sem fs
const config = require('./arquivo.json')
console.log(config.db)

// Ler a pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da Pasta...')
    console.log(arquivos)
})