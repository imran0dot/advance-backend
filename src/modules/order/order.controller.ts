import { Request, Response } from 'express';
import { OrderSchema } from './order.validation';
import { orderServices } from './order.services';

const createOrder =  async(req: Request, res: Response) => {
    try {
        const { order } = req.body;
        const orderDataValidation = OrderSchema.parse(order);
        if(orderDataValidation){
            const result = await orderServices.createOrderIntoDB(orderDataValidation);
            if(result !== null){
            res.status(500).json({
                "success": true,
                "message": "Order created successfully!",
                "data": result,
            })}
            else{
                res.status(500).json({
                    "success": false,
                    "message": "Order not created successfully!",
                    "data": result
                })
            }
        }
        else{
            res.status(500).json({
                "success": false,
                "message": "Order not created successfully!",
                "data": 'something went wrong!'
            })
        }
    } catch (err) {
        res.status(500).json({
            "success": true,
            "message": "Order not created successfully!",
            "data": {
                "email": "level2@programming-hero.com",
                "productId": "5fd67e890b60c903cd8544a3",
                "price": 999,
                "quantity": 1
            }
        })
    }
};


export const orderContoller = {
    createOrder,
}