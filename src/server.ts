import express from 'express';
import router from './router';
import { connectDB } from './config/db';
import 'dotenv/config';

const app = express();
connectDB();

//leer datos
app.use(express.json());


app.use('/', router);

export default app;