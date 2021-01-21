import express, {Express} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { putStudent } from './endpoints/putStudent';
import { putTeacher } from './endpoints/putTeacher';
import { putMission } from './endpoints/putMission';
import { putTeacherClassRelation } from './endpoints/putTeacherClassRelation'
import { getStudentAge } from './endpoints/getStudentAge';
import { getStudentClass } from './endpoints/getStudentClass';
import { getTeacherClass } from './endpoints/getTeacherClass';
import { getStudentHobby } from './endpoints/getStudentHobby';
import { postStudentClassRemoval } from './endpoints/postStudentClassRemoval';
import { deleteStudent } from './endpoints/deleteStudent';
import { deleteTeacherClass } from './endpoints/deleteTeacherClass';
import { postChangeStudentClass } from './endpoints/postChangeStudentClass';



const app: Express = express();

app.use(express.json());
app.use(cors());

app.put('/student/create', putStudent)
app.put('/teacher/create', putTeacher)
app.put('/mission/create', putMission)
app.put("/class/relation", putTeacherClassRelation)
app.get("/student/age/:id", getStudentAge)
app.get("/student/class/:mission_id", getStudentClass)
app.get("/teacher/class/:mission_id", getTeacherClass)
app.get("/student/hobby/:hobby_id", getStudentHobby)
app.post("/student/remove/class", postStudentClassRemoval)
app.delete("/student/delete/:id", deleteStudent)
app.delete("/teacher/delete", deleteTeacherClass)
app.post("/student/change/class", postChangeStudentClass)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});