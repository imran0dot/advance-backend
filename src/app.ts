import express from 'express';
import cors from 'cors';
import router from './modules/product/product.routs';
import orderRoute from './modules/order/order.route';
const app = express();

//middlewear
app.use(express.json());
app.use('/api/products', router)
app.use('/api/orders', orderRoute)

export default app;
