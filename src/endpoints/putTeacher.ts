import {Request, Response} from "express";
import { insertTeacher } from '../data/insertTeacher';
import { teacher } from '../types/type';

export const putTeacher = async(req: Request, res: Response): Promise<void> => {

    try {

        const [dia,mes,ano] = req.body.birthdate.split("/")        
        const newDate: Date = new Date(`${ano}-${mes}-${dia}`)
        
        const {id,name,email,mission_id} =  req.body as teacher
        if(!id || !name || !email || !newDate || !mission_id){
            throw new Error("Todos os campos são obrigatórios")
        }
        
        const newTeacher: any = await insertTeacher(
            id,
            name,
            email,
            newDate,
            mission_id
        )
        res.status(200).send({message:"Professor criado com sucesso!",newTeacher})

    } catch(error) {
        console.log(error)
        res.status(422).send(error.sqlMessage || error.message)
    }
}
