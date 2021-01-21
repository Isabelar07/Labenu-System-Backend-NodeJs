import express, {Express} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { putStudent } from './endpoints/putStudent';
import { putTeacher } from './endpoints/putTeacher';
import { putMission } from './endpoints/putMission';



const app: Express = express();

app.use(express.json());
app.use(cors());

app.put('/student/create', putStudent)

app.put('/teacher/create', putTeacher)

app.put('/mission/create', putMission)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});