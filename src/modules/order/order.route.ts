import express from 'express';
import { orderContoller } from './order.controller';
const  orderRoute = express.Router();

//create api 
orderRoute.post('/', orderContoller.createOrder);


export default orderRoute;
