import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import docenteRouter from './src/routes/docente.js';
import estudianteRouter from './src/routes/estudiante.js';
import cursoRouter from './src/routes/curso.js';
import carreraRouter from './src/routes/carrera.js';
import matriculaRouter from './src/routes/matricula.js';    

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, resp) => {
    return resp.send('Hello World');
})

app.use('/docente', docenteRouter);
app.use('/estudiante', estudianteRouter);
app.use('/curso', cursoRouter);
app.use('/carrera', carreraRouter);
app.use('/matricula', matriculaRouter);

export default app;