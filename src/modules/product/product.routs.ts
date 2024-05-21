import express from 'express';
import { productControllers } from './product.controllers';
const router = express.Router();

//api router 
router.post('/', productControllers.createProduct);
router.get('/', productControllers.getAllProducts);
router.get('/:productId', productControllers.getProduct);

// export controller 
export default  router;