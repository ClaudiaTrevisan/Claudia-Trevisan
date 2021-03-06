import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from 'knex'
import dotenv from 'dotenv'
import { getActors } from "./endpoits/getActors";
import { getActorByName } from "./endpoits/getActorByName";
import { getCountByGender } from "./endpoits/getCountByGender";
import { updateSalaryById } from "./endpoits/updateSalaryById";

dotenv.config()

export const connection = knex({  
   client: "mysql",  
   connection: {
   host: process.env.DB_HOST,  
   port:3306,
   user: process.env.DB_USER,  
   password: process.env.DB_PASSWORD,  
   database: process.env.DB_NAME
   }
})

const app: Express = express();

app.get("actors/all", getActors)

app.get("actors/:name", getActorByName)

app.get("actors/count/:gender", getCountByGender)

app.post("actors/update_salary", updateSalaryById)

app.use(express.json());
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
 });
 
