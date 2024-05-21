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

export const productControllers = {
    createProduct,
}