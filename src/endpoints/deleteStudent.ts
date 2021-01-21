import {Request, Response} from "express";
import { removeStudent } from '../data/removeStudent';

export const deleteStudent = async(req: Request, res: Response): Promise<void> => {

    try {
        const id:number = Number(req.params.id)

        if(!id ){
            throw new Error("Informe o id do aluno por params")
        }
        
        await removeStudent(id)
        res.status(200).send({message:"Estudante deletado com sucesso"})

    } catch(error) {
        console.log(error)
        res.status(422).send(error.sqlMessage || error.message)
    }
}