import { Product } from "./product.interface";
import ProductModel from "./product.model";

const insertProductIntoDB = async (product: Product) => {
    const result = await ProductModel.create(product);
    return result;
};

const getAllProductsFromDB = async () => {
    const result = await ProductModel.find();
    return result;
}

const getProductFromDb = async (id: string) => {
    const result = await ProductModel.findById(id).exec();
    return result;
}

export const productServices = {
    insertProductIntoDB,
    getAllProductsFromDB,
    getProductFromDb,
}