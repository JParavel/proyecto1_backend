import { Router } from 'express';
import {
	createProduct,
	deleteProduct,
	readProduct,
	searchProduct,
	updateProduct,
} from './product.controller';

const productRouter = Router();

productRouter.post('/', createProduct);
productRouter.get('/search', searchProduct);
productRouter.get('/:_id', readProduct);
productRouter.patch('/:_id', updateProduct);
productRouter.delete('/:_id', deleteProduct);

export default productRouter;
