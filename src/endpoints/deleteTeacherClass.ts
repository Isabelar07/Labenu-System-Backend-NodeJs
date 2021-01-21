import {Request, Response} from "express";
import { removeTeacherClass } from '../data/removeTeacherClass';

export const deleteTeacherClass = async(req: Request, res: Response): Promise<void> => {

    try {
        const teacher_id:number = Number(req.query.teacher_id)
        const mission_id:number = Number(req.query.mission_id)

        if(!teacher_id || !mission_id ){
            throw new Error("Informe o id do professor e da turma por query")
        }
        
        await removeTeacherClass(teacher_id,mission_id)
        res.status(200).send({message:"Professor removido da turma com sucesso"})

    } catch(error) {
        console.log(error)
        res.status(422).send(error.sqlMessage || error.message)
    }
}