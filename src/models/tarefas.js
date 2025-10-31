const db = require("./db")
const mongoose = require("mongoose")

const TarefaSchema =new  mongoose.Schema({
    nome:{
        type: String,
        require:true
    },
    descricao:{
        type: String,
        require:true
    }
    
})


mongoose.model("tarefas", TarefaSchema)