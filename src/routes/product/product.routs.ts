import express from 'express';
import { productControllers } from './product.controllers';
const router = express.Router();

//api router 
router.post('/', productControllers.createProduct);
router.get('/', productControllers.getAllProducts);

// export controller 
export default  router;