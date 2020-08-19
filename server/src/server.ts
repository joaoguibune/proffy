import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors);



//localhost:3333
app.listen(3333);