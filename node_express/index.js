const exp = require("constants")
const { json } = require("express")
const express =require("express")
const app=express()
const path = require("path")

const caminhoBase =path.join(__dirname, "templetes")

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.post('/cadastro/salvar', (requisicao ,resposta) =>{
    const nome = requisicao.body.nome
    const email = requisicao.body.email
    const senha= requisicao.body.senha
    
    console.log(` o email do usuario :${email}`)
})

app.get('/cadastrar', (requisicao , resposta) =>{
    resposta.sendFile(`${caminhoBase}/cadastro.html`)
})

app.get ( '/usuarios/:id', (resquisicao , resposta) =>{
    const id = resquisicao.params.id
    
    console.log(`acessando dados do usuarios ${id}`)
    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

app.get ( '/' , (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
    //resposta.send("test nodemon")
    console.log(caminhoBase)
})

app.listen(3000, () => {
    console.log("servido rodando  na porta 3000")
})  