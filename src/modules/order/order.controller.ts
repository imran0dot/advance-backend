import { Request, Response } from 'express';
import { OrderSchema } from './order.validation';
import { orderServices } from './order.services';

const createOrder = async (req: Request, res: Response) => {
    try {
        const { order } = req.body;
        const orderDataValidation = OrderSchema.parse(order);
        if (orderDataValidation) {
            const result = await orderServices.createOrderIntoDB(orderDataValidation);
            if (result !== null) {
                res.status(500).json({
                    "success": true,
                    "message": "Order created successfully!",
                    "data": result,
                })
            }
            else {
                res.status(500).json({
                    "success": false,
                    "message": "Order not created successfully!",
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
        const result = await orderServices.getAllOrderFromDB();
        res.status(500).json({
            "success": true,
            "message": "Order fetched successfully!",
            "data": result,
        })
    }
    catch (err) {
        res.status(500).json({
            "success": true,
            "message": "Order not fetched successfully!",
            "data": err
        })
    }
};

export const orderContoller = {
    createOrder,
    getAllOrders
}