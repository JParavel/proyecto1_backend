import { Router } from 'express';
import {
	createRestaurant,
	deleteRestaurant,
	readRestaurant,
	searchRestaurant,
	updateRestaurant,
} from './restaurant.controller';

const restaurantRouter = Router();

restaurantRouter.post('/', createRestaurant);
restaurantRouter.get('/search', searchRestaurant);
restaurantRouter.get('/:_id', readRestaurant);
restaurantRouter.patch('/:_id', updateRestaurant);
restaurantRouter.delete('/:_id', deleteRestaurant);

export default restaurantRouter;
