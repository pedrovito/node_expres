const express =require("express")
const app=express()
const path = require("path")

const caminhoBase =path.join(__dirname, "templetes")

app.get ( '/' , (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
    //resposta.send("test nodemon")
    console.log(caminhoBase)
})

app.listen(3000, () => {
    console.log("servido rodando  na porta 3000")
})  