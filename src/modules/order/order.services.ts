import ProductModel from "../product/product.model";
import { Order } from "./order.interface"
import OrderModel from "./order.model";

// create order into database 
const createOrderIntoDB = async (orderData: Order) => {
    // find product to DB 
    const product = await ProductModel.findOne({ _id: orderData.productId });

    if (product) {
        //get quantity of product
        if(product.inventory.quantity == 0){
            return null
        }
        // Update the quantity of the product
        await ProductModel.updateOne(
            { _id: orderData.productId },
            { $inc: { 'inventory.quantity': -orderData.quantity } }
        );

        return await OrderModel.create(orderData);
    }
    else {
        return null
    }
};

// get all order from database 
const getAllOrderFromDB = async (email: string | null) => {
    if (email) {
        return await OrderModel.find({ email: email });
    }
    return await OrderModel.find()
}

export const orderServices = {
    createOrderIntoDB,
    getAllOrderFromDB
}