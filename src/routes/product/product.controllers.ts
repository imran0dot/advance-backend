import { Request, Response } from "express";
import { productServices } from "./product.services";

// create product
const createProduct = async (req: Request, res: Response) => {
    try {
        const {product: ProductData} = req.body;
        const reqsult = await productServices.insertProductIntoDB(ProductData);

        res.status(200).json({
            "success": true,
            "message": "Products created successfully!",
            "data": reqsult
        })
    } catch (err) {
        res.status(500).json({
            "success": false,
            "message": "Product is not created successfully!",
            "data": `You've an error ${err}`
        })
    }
};

//get products 
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await productServices.getAllProductsFromDB();
        res.status(200).json({
            "success": true,
            "message": "Products fetched  successfully!",
            "data": result
        })
    } catch (err) {
        res.status(500).json({
            "success": false,
            "message": "Product is not fetched successfully!",
            "data": `You've an error ${err}`
        })
    }
};

const getProduct = async (req: Request, res: Response) => {
    try {
        const {productId: id} = req.params;
        const result = await productServices.getProductFromDb(id as string);
        res.status(200).json({
            "success": true,
            "message": "Product fetched  successfully!",
            "data": result
        })
    } catch (err) {
        res.status(500).json({
            "success": false,
            "message": "Product is not fetched successfully!",
            "data": `You've an error ${err}`
        })
    }
};

export const productControllers = {
    createProduct,
    getAllProducts,
    getProduct
}