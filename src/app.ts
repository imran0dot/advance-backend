import express, {Request, Response} from 'express';
import productRoute from './app/modules/product/product.routs';
import orderRoute from './app/modules/order/order.route';
const app = express();

//middlewear
app.use(express.json());
app.use('/api/products', productRoute)
app.use('/api/orders', orderRoute);
app.use('*', (req: Request, res: Response) => {
    res.json({
        "success": false,
        "message": "Route not found"
       })
})

export default app;
