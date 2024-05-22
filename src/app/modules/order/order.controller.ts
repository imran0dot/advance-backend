import { Request, Response } from 'express';
import { OrderSchema } from './order.validation';
import { orderServices } from './order.services';

const createOrder = async (req: Request, res: Response) => {
    try {
        // get body data from frontend 
        const { order } = req.body;

        // validate data using zod 
        const orderDataValidation = OrderSchema.parse(order);
        if (orderDataValidation) {
            const result = await orderServices.createOrderIntoDB(orderDataValidation);
            if (result !== null) {
                res.status(200).json({
                    "success": true,
                    "message": "Order created successfully!",
                    "data": result,
                })
            }
            else {
                res.status(500).json({
                    "success": false,
                    "message": "Insufficient quantity available in inventory",
                    "data": result
                })
            }
        }
        else {
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
            "data": err
        })
    }
};

const getAllOrders = async (req: Request, res: Response) => {
    try {
        const { email } = req.query;
        const result = await orderServices.getAllOrderFromDB(email as string | null);
        if(result.length !== 0){
            res.status(200).json({
                "success": true,
                "message": "Order fetched successfully!",
                "data": result,
            })
        }else{
            res.status(200).json({
                "success": true,
                "message": "Order not found",
                "data": result,
            })
        }
        
    }
    catch (err) {
        res.status(500).json({
            "success": true,
            "message": "Something went wrong!",
            "data": err
        })
    }
};

export const orderContoller = {
    createOrder,
    getAllOrders
}