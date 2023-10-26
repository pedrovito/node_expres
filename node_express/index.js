const express =require("express")
const app=express()

app.get ( '/' , (requisicao, resposta) => {
    resposta.send("estou funcionando com express")
})

app.listen(3000, () => {
    console.log("servido rodando  na porta 3000")
})