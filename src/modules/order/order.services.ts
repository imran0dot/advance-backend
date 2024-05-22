import ProductModel from "../product/product.model";
import { Order } from "./order.interface"
import OrderModel from "./order.model";

const createOrderIntoDB = async(orderData: Order) => {
    const findProductOnDb = await ProductModel.find({_id: orderData.productId});
    if(findProductOnDb.length > 0){
        return await OrderModel.create(orderData);
    }
    else{
        return null
    }
};

const getAllOrderFromDB = async() =>{
    const result = await OrderModel.find();
    return result;
}
export const orderServices = {
    createOrderIntoDB,
    getAllOrderFromDB
}