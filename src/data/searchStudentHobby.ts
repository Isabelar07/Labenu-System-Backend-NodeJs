import {connection} from "../connection/connection"

export const searchStudentHobby = async(hobby_id:number):Promise<any> =>{
    const result = await connection.raw(`
        SELECT Student.name,Hobby.hobby FROM Student_Hobby   
        INNER JOIN Student ON Student.id = Student_Hobby.student_id
        INNER JOIN Hobby ON Hobby.id = Student_Hobby.hobby_id
        WHERE Hobby.id = ${hobby_id};
    `)    
    return (result[0])
}