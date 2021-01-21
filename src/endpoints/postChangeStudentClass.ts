import {Request, Response} from "express";
import { changeStudentClass } from '../data/changeStudentClass';

export const postChangeStudentClass = async(req: Request, res: Response): Promise<void> => {

    try {
        const student_id:number = Number(req.body.student_id)
        const mission_id:number = Number(req.body.mission_id)

        if(!student_id || !mission_id ){
            throw new Error("Informe o id do aluno e da turma pelo body")
        }
        
        await changeStudentClass(student_id,mission_id)
        res.status(200).send({message:"Estudante transferido de turma com sucesso"})

    } catch(error) {
        console.log(error)
        res.status(422).send(error.sqlMessage || error.message)
    }
}