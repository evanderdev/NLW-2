import express from 'express';
import cors from 'cors';
import routes from './routes';
import morgan from 'morgan'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(morgan('dev'));

app.listen(3333);