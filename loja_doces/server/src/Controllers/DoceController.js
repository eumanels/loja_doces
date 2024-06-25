import DoceModel from "../Models/DoceModel.js";

class DoceController{
    constructor(){
        
    }

    create(req,res){
        const nome_doce = req.body.nome_doce;
        const id_cat = req.body.id_cat
        DoceModel.create(nome_doce, id_cat).then(
            resposta => {
                console.debug("Enfeitando um doce")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro ao enfeitar o doce :(")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req,res){
        DoceModel.read().then(
            resposta => {
                console.debug("Olhando o cardápio")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro ao ler o cardápio")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req,res){
        const id_doce = req.params.id_doce
        const nome_doce = req.body.nome_doce;

        DoceModel.update(id_doce, nome_doce).then(
            resposta =>{
                console.debug("Atualizando a receita")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao atualizar a receita")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_doce = req.params.id_doce;

        DoceModel.delete(id_doce).then(
            resposta =>{
                console.debug("Retirando do cardápio")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao deletar o doce :(")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }
}

export default new DoceController();