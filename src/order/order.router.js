import { Router } from 'express';
import {
	aviableOrders,
	createOrder,
	deleteOrder,
	readOrder,
	searchOrders,
	updateOrder,
} from './order.controller';

const orderRouter = Router();

orderRouter.post('/', createOrder);
orderRouter.get('/:_id', readOrder);
orderRouter.get('/search', searchOrders);
orderRouter.get('/aviable', aviableOrders);
orderRouter.patch('/:_id', updateOrder);
orderRouter.delete('/:_id', deleteOrder);

export default orderRouter;
