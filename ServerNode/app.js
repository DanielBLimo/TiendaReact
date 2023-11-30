import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import prodRoutes from './routes/routes.js';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/producto', prodRoutes);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dbimages')));

try {
  await db.authenticate();
  console.log('Exito');
} catch (error) {
  console.log('Error: ${error}');
}

app.listen(8000, () => {
  console.log('Server en http://localhost:8000/');
});
