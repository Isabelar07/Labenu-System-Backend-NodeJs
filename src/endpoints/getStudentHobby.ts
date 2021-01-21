import {Request, Response} from "express";
import { searchStudentHobby } from '../data/searchStudentHobby';

export const getStudentHobby = async(req: Request, res: Response): Promise<void> => {

    try {
        const hobby_id:number = Number(req.params.hobby_id)

        if(!hobby_id ){
            throw new Error("Informe o id do hobby por params")
        }
        
        const hobbies: any = await searchStudentHobby(hobby_id)
        res.status(200).send({message:"Hobbies dos estudantes", hobbies})

    } catch(error) {
        console.log(error)
        res.status(422).send(error.sqlMessage || error.message)
    }
}