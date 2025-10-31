const express = require("express")
const router  = express.Router();
const mongoose = require("mongoose")



require("../models/tarefas")


const Tarefa = mongoose.model("tarefas")

router.get("/tarefas",(req,res)=>{
    Tarefa.find().lean().then((tarefas)=>{
        res.render("admin/tarefas/tarefas",{tarefas: tarefas})
    })
})


router.get("/tarefas/add",(req,res)=>{
    res.render("admin/tarefas/addtarefas")
})



router.post("/tarefas/nova",(req,res)=>{
    var tarefas = new Tarefa();
    tarefas.nome = req.body.nome
    tarefas.descricao = req.body.descricao

    tarefas.save().then(()=>{
        res.redirect("/rota_tarefas/tarefas")

    }).catch((error)=>{

        res.render("Houveum erro: " + error)
    })
})



router.get("/editar_tarefas/:id",(req,res)=>{
    Tarefa.findOne({_id:req.params.id}).lean().then((tarefa)=>{
        res.render("admin/tarefas/edittarefas",{tarefa:tarefa})
    })
})

router.post("/tarefas/editar_tarefas/",(req,res)=>{
    Tarefa.updateOne({_id:req.body._id},
        {$set:{nome:req.body.nome, descricao:req.body.descricao}}
    ).then(()=>{
        res.redirect("/rota_tarefas/tarefas")
    })
})



router.get("/deletar_tarefas/:id",(req,res)=>{
    Tarefa.deleteMany({_id:req.params.id}
    ).then(()=>{
        res.redirect("/rota_tarefas/tarefas")
    })
})


module.exports = router