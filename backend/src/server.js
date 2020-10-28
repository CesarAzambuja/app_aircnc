const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')


const app = express();
mongoose.connect('mongodb+srv://caaso:Azambuja@omnistack.ceu7x.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
/* PRINCIPAIS METODOS DE ROTAS
GET Pegar alguma informação
POST Adicionar alguma informação
PUT Alterar alguma informação
DELETE Deletar alguma informação*/

app.use(cors())
app.use(express.json())
app.use(routes)

//req.query = Acessar query params (Para filtros)
//req.params = Acessar route params (Para edição ou deletar)
//rep.body = Acessar o corpo da requisição (Criar, editar e excluir)


app.listen(3333);