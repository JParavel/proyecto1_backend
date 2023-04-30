import productModel from './product.model';

export async function createProduct(req, res) {
	try {
		const restaurantData = req.body;
		restaurantData.active = true;
		const document = await productModel.create(restaurantData);
		res.status(201).json(document);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function readProduct(req, res) {
	try {
		const { _id } = req.params;
		const filter = { _id, active: true };
		const document = await productModel.findOne(filter);
		document ? res.status(200).json(document) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function searchProduct(req, res) {
	try {
		const { restaurantID, categories } = req.query;

		const filter = {
			...(restaurantID && { restaurantID }),
			...(categories && { category: { $in: categories.split(',') } }),
			active: true,
		};

		const documents = await productModel.find(filter);
		documents.length > 0 ? res.status(200).json(documents) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function updateProduct(req, res) {
	try {
		const { _id } = req.params;
		const filter = { _id, active: true };
		const update = req.body;
		const document = await productModel.findOneAndUpdate(filter, update, {
			runValidators: true,
			new: true,
		});
		document ? res.status(200).json(document) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function deleteProduct(req, res) {
	try {
		const { _id } = req.params;
		const filter = { _id, active: true };
		const update = { active: false };
		const document = await productModel.findOneAndUpdate(filter, update, {
			runValidators: true,
			new: true,
		});
		document ? res.status(200).json(document) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}
