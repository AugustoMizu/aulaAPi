require("dotenv").config();

const db = require("./db");

const express = require("express")  ;
const app = express();

app.use(express.json());

app.delete("/produtos/:id", (request, response)=>{
    const id = request.params.id;
    db.deletarProduto(id);
    response.sendStatus(204);
});

app.patch("/produtos/:id", (request, response)=>{
    const id = request.params.id;
    const produto = request.body;

    db.alterarProduto(id, produto);
    response.sendStatus(200);
});

app.post("/produtos", (request, response)=>{
    const produto = request.body;
    db.insereCliente(produto);
    response.sendStatus(201);
});

app.get("/produtos/:id",(request, response)=>{
    const id = request.params.id;
    response.json(db.listaProduto(id));
});

app.get("/produtos",(request, response)=>{
    response.json(db.listaTodosProdutos());
});

app.get("/", (request, response) => { // criação da rota ou endpoint principal ou raiz com a função definindo o que será feito.

    response.json({
        message: "pagina do produto!"
    })
});

app.listen(process.env.PORT, ()=>{
    console.log("App IS RUNNING!");   
});