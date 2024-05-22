import ProductModel from "../product/product.model";
import { Order } from "./order.interface"
import OrderModel from "./order.model";

const createOrderIntoDB = async(orderData: Order) => {
    const findProductOnDb = await ProductModel.find({_id: orderData.productId});
    console.log(findProductOnDb.length > 0);
    if(findProductOnDb.length > 0){
        return await OrderModel.create(orderData);
    }
    else{
        return null
    }
};

export const orderServices = {
    createOrderIntoDB,
}