import {connection} from "../connection/connection"

export const searchStudentAge = async(id:number):Promise<any> =>{
    const result = await connection.raw(`
        SELECT DATEDIFF(CURDATE(),birthdate)/365
        FROM Student
        WHERE id=${id}
    `)
    /*const result: any = connection
        .select("DATEDIFF(CURDATE(),birthdate)/365")
        .from("Student")
        .where({id})
    */  
    return (result[0][0])
}