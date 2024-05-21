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

const updateProductIntoDB = async( productId: string, productData: Product) => {
    const result = await ProductModel.updateOne({_id: productId}, productData);
    return result;
};

const deleteProductIntoDB = async( productId: string) => {
    const result = await ProductModel.deleteOne({_id: productId});
    return result;
};

export const productServices = {
    insertProductIntoDB,
    getAllProductsFromDB,
    getProductFromDb,
    updateProductIntoDB,
    deleteProductIntoDB
}