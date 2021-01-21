import {connection} from "../connection/connection"

export const removeStudent = async(id:number):Promise<any> =>{
    const result = await connection.raw(`
        DELETE FROM Student
        WHERE id = ${id};
    `)    
    return (result[0][0])
}