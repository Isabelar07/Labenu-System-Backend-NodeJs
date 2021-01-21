import {connection} from "../connection/connection"

export const searchStudentClass = async(mission_id:number):Promise<any> =>{
    const result: any = connection
        .select("name")
        .from("Student")
        .where({mission_id})     
    return (result)
}