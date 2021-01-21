import {connection} from "../connection/connection"

export const searchTeacherClass = async(mission_id:number):Promise<any> =>{
    const result: any = connection
        .select("name")
        .from("Teacher")
        .where({mission_id})
    return (result)
}