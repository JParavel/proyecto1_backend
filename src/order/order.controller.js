import restaurantModel from '../restaurant/restaurant.model';
import orderModel from './order.model';

export async function createOrder(req, res) {
	try {
		const orderData = req.body;
		orderData.active = true;
		const document = await orderModel.create(orderData);
		const restaurantID = document.restaurantID;
		await restaurantModel.findByIdAndUpdate(restaurantID, {
			$inc: { popularity: 1 },
		});
		res.status(201).json(document);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function readOrder(req, res) {
	try {
		const { _id } = req.params;
		const filter = { _id, active: true };
		const document = await orderModel.findOne(filter);
		document ? res.status(200).json(document) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function searchOrders(req, res) {
	try {
		const { domiciliaryID, clientID, restaurantID, startDate, endDate } =
			req.query;

		const filter = {
			...(domiciliaryID && { domiciliaryID }),
			...(clientID && { clientID }),
			...(restaurantID && { restaurantID }),
			...(startDate &&
				endDate && {
					createdAt: { $gte: newDate(startDate), $lte: newDate(endDate) },
				}),
			active: true,
		};

		const documents = await orderModel.find(filter);
		documents.length > 0 ? res.status(200).json(documents) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function aviableOrders(req, res) {
	try {
		const filter = { state: 'envidado', active: true };
		const documents = await orderModel.find(filter);
		documents.length > 0 ? res.status(200).json(documents) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function updateOrder(req, res) {
	try {
		const { _id } = req.params;
		const filter = { _id, active: true, state: 'creado' };
		const update = req.body;
		const document = await orderModel.findOneAndUpdate(filter, update, {
			runValidators: true,
			new: true,
		});
		document ? res.status(200).json(document) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function deleteOrder(req, res) {
	try {
		const { _id } = req.params;
		const filter = { _id, active: true };
		const update = { active: false };
		const document = await orderModel.findOneAndUpdate(filter, update, {
			runValidators: true,
			new: true,
		});
		document ? res.status(200).json(document) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}
