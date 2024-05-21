import express from 'express';
import cors from 'cors';
import router from './modules/product/product.routs';
const app = express();

//middlewear
app.use(express.json());
app.use('/api/products', router)

export default app;
