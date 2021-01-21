import {connection} from "../connection/connection"

export const removeTeacherClass = async(teacher_id:number,mission_id:number):Promise<any> =>{
    const result = await connection.raw(`
        DELETE FROM Class
        WHERE (teacher_id=${teacher_id} AND mission_id=${mission_id});
    `)    
    return (result[0][0])
}