import express from 'express';
import mongoose from 'mongoose';
import userRouter from './user/user.router';
import restaurantRouter from './restaurant/restaurant.router';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/users', userRouter);
app.use('/restaurants', restaurantRouter);

mongoose
	.connect('mongodb+srv://cluster0.y2hf4m5.mongodb.net/', {
		dbName: 'proyecto',
		user: 'test',
		pass: 'test',
	})
	.then(() => console.log('database connected'))
	.catch((error) => console.log(error));

try {
	app.listen(port);
	console.log('server running on http://localhost:' + port);
} catch (error) {
	console.log(error);
}
