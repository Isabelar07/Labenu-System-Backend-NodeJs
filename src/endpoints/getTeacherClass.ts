import {Request, Response} from "express";
import { searchTeacherClass } from '../data/searchTeacherClass';

export const getTeacherClass = async(req: Request, res: Response): Promise<void> => {

    try {
        const mission_id:number = Number(req.params.mission_id)

        if(!mission_id ){
            throw new Error("Informe o id da turma por params")
        }
        
        const teachers: any = await searchTeacherClass(mission_id)
        res.status(200).send({message:"Professores da turma", teachers})

    } catch(error) {
        console.log(error)
        res.status(422).send(error.sqlMessage || error.message)
    }
}