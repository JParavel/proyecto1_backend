import userModel from './user.model';

export async function createUser(req, res) {
	try {
		const userData = req.body;
		userData.active = true;
		const document = await userModel.create(userData);
		res.status(201).json(document);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function readUserID(req, res) {
	try {
		const { _id } = req.params;
		const filter = { _id, active: true };
		const document = await userModel.findOne(filter);
		document ? res.status(200).json(document) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function readUserMail(req, res) {
	try {
		const { mail, password } = req.params;
		const filter = {
			mail,
			password,
			active: true,
		};
		const document = await userModel.findOne(filter);
		document ? res.status(200).json(document) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function updateUser(req, res) {
	try {
		const { _id } = req.params;
		const filter = { _id, active: true };
		const update = req.body;
		const document = await userModel.findOneAndUpdate(filter, update, {
			runValidators: true,
			new: true,
		});
		document ? res.status(200).json(document) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

export async function deleteUser(req, res) {
	try {
		const { _id } = req.params;
		const filter = { _id, active: true };
		const update = { active: false };
		const document = await userModel.findOneAndUpdate(filter, update, {
			runValidators: true,
			new: true,
		});
		document ? res.status(200).json(document) : res.sendStatus(404);
	} catch (error) {
		res.status(400).json(error.message);
	}
}
