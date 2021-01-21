import {connection} from "../connection/connection"

export const insertTeacherClass = async(teacher_id:number,mission_id:number):Promise<any> =>{
    await connection
    .insert({
        teacher_id:teacher_id,
        mission_id:mission_id
    })
    .into("Class")
}