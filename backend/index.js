import express from 'express';
import serverRoutes from './routes/routes.js';
import cors from 'cors';

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(cors({ origin: 'http://localhost:3001' }));
app.use(serverRoutes);

app.listen(PORT);
