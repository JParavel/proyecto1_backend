import restaurantModel from './restaurant.model';

export async function createRestaurant(req, res) {
	try {
		const restaurantData = req.body;
		restaurantData.active = true;
		const document = await restaurantModel.create(restaurantData);
		res.status(201).json(document);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function readRestaurant(req, res) {
	try {
		const { _id } = req.params;
		const filter = { _id, active: true };
		const document = await restaurantModel.findOne(filter);
		document ? res.status(200).json(document) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function searchRestaurant(req, res) {
	try {
		const { name, categories } = req.query;

		const filter = {
			...(name && { name: { $regex: name, $options: 'i' } }),
			...(categories && { categories: { $in: categories.split(',') } }),
			active: true,
		};

		const documents = await restaurantModel.find(filter);
		documents.length > 0 ? res.status(200).json(documents) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function updateRestaurant(req, res) {
	try {
		const { _id } = req.params;
		const filter = { _id, active: true };
		const update = req.body;
		const document = await restaurantModel.findOneAndUpdate(filter, update, {
			runValidators: true,
			new: true,
		});
		document ? res.status(200).json(document) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function deleteRestaurant(req, res) {
	try {
		const { _id } = req.params;
		const filter = { _id, active: true };
		const update = { active: false };
		const document = await restaurantModel.findOneAndUpdate(filter, update, {
			runValidators: true,
			new: true,
		});
		document ? res.status(200).json(document) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}
