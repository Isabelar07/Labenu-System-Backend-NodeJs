import {Request, Response} from "express";
import { searchStudentAge } from '../data/searchStudentAge';


export const getStudentAge = async(req: Request, res: Response): Promise<void> => {

    try {
        const id: number = Number(req.params.id)
        
        if(!id ){
            throw new Error("Informe o id por params")
        }
        
        const students: any = await searchStudentAge(id)

        res.status(200).send({message:"Idade do estudante", students})

    } catch(error) {
        console.log(error)
        res.status(422).send(error.sqlMessage || error.message)
    }
}