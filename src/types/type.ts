export type student = {
    id:number,
    name:string,
    email:string,
    birthdate: Date,
    mission_id:number
}

export type teacher = {
    id:number,
    name:string,
    email:string,
    birthdate: Date,
    mission_id:number
}

export type mission = {
    id: number,
    name: string,
    start_date: Date,
    end_date: Date,
    module: number
}