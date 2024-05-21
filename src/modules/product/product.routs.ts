import express from 'express';
import { productControllers } from './product.controllers';
const router = express.Router();

//api router 
// create product 
router.post('/', productControllers.createProduct);

// get products 
router.get('/', productControllers.getAllProducts);

// get product 
router.get('/:productId', productControllers.getProduct);

// update product 
router.put('/:productId', productControllers.updateProduct);

// delete product 
router.delete('/:productId', productControllers.deleteProduct);

export default  router;