import { Request, Response } from 'express';
import { insertStudent } from '../data/insertStudent';
import { student } from '../types/type';


export const putStudent = async(req: Request, res: Response): Promise<void> => {

    try {

        const [dia,mes,ano] = req.body.birthdate.split("/")        
        const newDate: Date = new Date(`${ano}-${mes}-${dia}`)
        
        const {id,name,email,mission_id} =  req.body as student
        if(!id || !name || !email || !newDate || !mission_id){
            throw new Error("Todos os campos são obrigatórios")
        }
        
        const newStudent: any = await insertStudent(
            id,
            name,
            email,
            newDate,
            mission_id
        )
        res.status(200).send({message:"Estudante criado com sucesso!",newStudent})

    } catch(error) {
        console.log(error)
        res.status(422).send(error.sqlMessage || error.message)
    }
}