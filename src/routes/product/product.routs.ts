import express from 'express';
import { productControllers } from './product.controllers';
const router = express.Router();

//api router 
router.post('/', productControllers.createProduct);

// export controller 
export default router;