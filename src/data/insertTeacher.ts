import {connection} from "../connection/connection"

export const insertTeacher = async (id: number,name: string, email: string, birthDate: Date, mission_id: number): Promise<any> => {

    await connection
    .insert({
        id:id,
        name:name,
        email:email,
        birthdate: birthDate,
        mission_id:mission_id
    })
    .into("Teacher")
    
}