import express from 'express';
import { connect } from "./database/database";
import { userRouter } from './apiAdapter/users';
import {json} from 'body-parser'

const app = express();
const PORT = 8055;

connect();

app.use(json())

app.use(userRouter)

app.listen(PORT, () => {
  
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}, thank you very much`);

});