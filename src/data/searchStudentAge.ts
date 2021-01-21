import {connection} from "../connection/connection"

export const searchStudentAge = async(id:number):Promise<any> =>{
    const result = await connection.raw(`
        SELECT FLOOR(DATEDIFF(CURDATE(),birthdate)/365)
        FROM Student
        WHERE id=${id}
    `)
    /*const teste: any = connection
        .select("birthdate")
        .from("Student")
        .where({id})
     */    
    return (result[0][0])
}