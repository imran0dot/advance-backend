import { Request, Response } from "express";
import { productServices } from "./product.services";
import productZodSchema from "./product.validation";

// create product
const createProduct = async (req: Request, res: Response) => {
    try {
        const { product: ProductData } = req.body;
        const validationProductBody = productZodSchema.parse(ProductData);
        if (validationProductBody) {
            const result = await productServices.insertProductIntoDB(validationProductBody);
            res.status(200).json({
                "success": true,
                "message": "Products created successfully!",
                "data": result
            })
        }
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
        const { productId: id } = req.params;
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

const updateProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const { product: ProductData } = req.body;
        const validationProductBody = productZodSchema.parse(ProductData);
        if (validationProductBody) {
            const result = await productServices.updateProductIntoDB(productId, validationProductBody);
            res.status(200).json({
                "success": true,
                "message": "Products updated successfully!",
                "data": result
            })
        }
    } catch (err) {
        res.status(500).json({
            "success": false,
            "message": "Product is not updated successfully!",
            "data": `You've an error ${err}`
        })
    }
};

const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await productServices.deleteProductIntoDB(productId);
        res.status(200).json({
            "success": true,
            "message": "Products deleted successfully!",
            "data": result
        })
    } catch (err) {
        res.status(500).json({
            "success": false,
            "message": "Product is not deleted successfully!",
            "data": `You've an error ${err}`
        })
    }
};

export const productControllers = {
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
}