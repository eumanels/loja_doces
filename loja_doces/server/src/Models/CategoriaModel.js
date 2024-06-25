import mysql from "mysql2"
import config from "../Config.js";

class CategoriaModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db);
    }

    create(nome_categoria){
        let sql = `INSERT INTO categorias (nome_categoria) VALUES("${nome_categoria}");`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql, (erro,retorno)=>{
                if(erro){
                    reject([400, erro])
                }
                resolve([201, "////// CATEGORIA ADICIONADA /////////"])
            })
        });
    }

    read(){
       let sql = `SELECT * FROM categorias;`

       return new Promise((resolve,reject)=>{
        this.conexao.query(sql, (erro,retorno)=>{
            if(erro){
                reject([400, erro])
            }
            resolve([201, retorno])
        })
       });
        
    }

    update(id_cat,nome_categoria){
        let sql = `UPDATE categorias SET nome_categoria="${nome_categoria}" WHERE id_cat="${id_cat}"`
        
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400, erro])
                }else if(retorno.affectedRows>0){
                    resolve([200, "/////// Categoria Atualizada! /////////"])
                }else{
                    resolve([404, "Categoria não encontrada :("])
                }
                
            })
        });
    }

    delete(id_cat){
        let sql = `DELETE FROM categorias WHERE id_cat="${id_cat}"`
        
        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, (erro,retorno)=>{
                if(erro){
                    reject([400, erro])
                }
                resolve([200, "////// CATEGORIA REMOVIDA! //////////"])
            })
        })
        
    }
}

export default new CategoriaModel();