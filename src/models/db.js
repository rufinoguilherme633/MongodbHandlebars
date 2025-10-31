const mongoose = require("mongoose")


mongoose.connect("mongodb://127.0.0.1/tarefa")
    .then(() =>{
        console.log("tudo ok")
    }).catch((error)=>{
        console.log("conexatado com sucesso")
    })