import {connection} from "../connection/connection"

export const changeStudentClass = async(student_id:number,mission_id:number):Promise<any> =>{
    const result = await connection.raw(`
        UPDATE Student
        SET mission_id = ${mission_id}
        WHERE id = ${student_id};
    `)    
    return (result[0][0])
}