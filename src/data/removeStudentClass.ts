import {connection} from "../connection/connection"

export const removeStudentClass = async(id:number):Promise<any> =>{
    const result = await connection.raw(`
        UPDATE Student
        SET mission_id = null
        WHERE id = ${id};
    `)    
    return (result[0][0])
}