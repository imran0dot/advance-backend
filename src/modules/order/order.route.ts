import express from 'express';
import { orderContoller } from './order.controller';
const  orderRoute = express.Router();

//create order 
orderRoute.post('/', orderContoller.createOrder);

//get order
orderRoute.get('/', orderContoller.getAllOrders);


export default orderRoute;
