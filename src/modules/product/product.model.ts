import mongoose, {Schema, model} from "mongoose";
import { Product } from "./product.interface";

// product model schema 
const product_schema = new Schema<Product>({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    description : {
        type: String,
        required: [true, 'Description  is required']
    },
    price  : {
        type: Number,
        required: [true, 'Price   is required']
    },
    category  : {
        type: String,
        required: [true, 'Category   is required']
    },
    tags: [{
        type: String,
        required: [true, 'Category   is required']
    }],
    variants: [{
        type: {
            type: String,
            require: [true, 'type is required']
        },
        value: {
            type: String,
            require: [true, 'value is required']
        }
    }],
    inventory: {
        quantity : {
            type: Number,
            require: [true, 'type is required']
        },
        inStock : {
            type: Boolean,
            require: [true, 'value is required']
        }
    }
});

// create model 
const ProductModel = model<Product>('product', product_schema);
export default ProductModel;