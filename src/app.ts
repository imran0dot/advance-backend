import express from 'express';
import cors from 'cors';
const app = express();

//middlewear
app.use(express.json());

export default app;
