import {Request, Response} from "express";
import { removeStudentClass } from '../data/removeStudentClass';

export const postStudentClassRemoval = async(req: Request, res: Response): Promise<void> => {

    try {
        const id:number = Number(req.body.id)

        if(!id ){
            throw new Error("Informe o id do aluno pelo body")
        }
        
        await removeStudentClass(id)
        res.status(200).send({message:"Estudante removido da turma com sucesso"})

    } catch(error) {
        console.log(error)
        res.status(422).send(error.sqlMessage || error.message)
    }
}