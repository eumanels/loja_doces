import CategoriaModel from "../Models/CategoriaModel.js";

class CategoriaController{
    constructor(){
        
    }

    create(req,res){
        const nome = req.body.nome_categoria;
        CategoriaModel.create(nome).then(
            resposta => {
                console.debug("Criando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro ao criar a categoria :(")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req,res){
        CategoriaModel.read().then(
            resposta => {
                console.debug("Verificando as categorias")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro ao ler as categorias")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req,res){
        const id_cat = req.params.id_cat
        const nome_categoria = req.body.nome_categoria;

        CategoriaModel.update(id_cat, nome_categoria).then(
            resposta =>{
                console.debug("Atualizando os rótulos")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao atualizar os rótulos")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_cat = req.params.id_cat;

        CategoriaModel.delete(id_cat).then(
            resposta =>{
                console.debug("Retirando do estoque")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao deletar do estoque :(")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }
}

export default new CategoriaController();