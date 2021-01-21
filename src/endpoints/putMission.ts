import {Request, Response} from "express";
import { insertMission } from '../data/insertMission';
import { mission } from '../types/type';

export const putMission = async(req: Request, res: Response): Promise<void> => {

    try {

        const [start_dia, start_mes, start_ano] = req.body.start_date.split("/")        
        const start_date: Date = new Date(`${start_ano}-${start_mes}-${start_dia}`)

        const [end_dia, end_mes, end_ano] = req.body.end_date.split("/")        
        const end_date: Date = new Date(`${end_ano}-${end_mes}-${end_dia}`)
        
        const {id,name, module} =  req.body as mission
        if(!id || !name || !start_date || !end_date || !module){
            throw new Error("Todos os campos são obrigatórios")
        }
        
        const newMission: any = await insertMission(
            id,
            name,
            start_date,
            end_date,
            module
        )
        res.status(200).send({message:"Turma criada com sucesso!", newMission})

    } catch(error) {
        console.log(error)
        res.status(422).send(error.sqlMessage || error.message)
    }
}