import {Response,Request} from "express"
import {insertTeacherClass} from "../data/insertTeacherClass"


export const putTeacherClassRelation = async(req:Request,res:Response):Promise<void> =>{
    try{        
        const {teacher_id,mission_id} =  req.body

        if(!teacher_id || !mission_id){
            throw new Error("Todos os campos são obrigatórios")
        }
        
        const newClassRelation: any = await insertTeacherClass(
            teacher_id,
            mission_id
        )
        res.status(200).send({message:"Relação professor turma criado com sucesso!",newClassRelation})
    }

    catch(error){
        res.send(error.sqlMessage || error.message)
    }
}
