import {Request, Response} from "express";
import { searchStudentClass } from '../data/searchStudentClass';

export const getStudentClass = async(req: Request, res: Response): Promise<void> => {

    try {
        const mission_id:number = Number(req.params.mission_id)

        if(!mission_id ){
            throw new Error("Informe o id da turma por params")
        }
        
        const students: any = await searchStudentClass(mission_id)
        res.status(200).send({message:"Estudantes da turma", students})

    } catch(error) {
        console.log(error)
        res.status(422).send(error.sqlMessage || error.message)
    }
}