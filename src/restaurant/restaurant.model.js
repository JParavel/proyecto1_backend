import { Schema, model } from 'mongoose';

const restaurantSchema = new Schema(
	{
		name: { type: String, required: true, unique: true },
		address: { type: String, required: true },
		categories: {
			type: [String],
			validate: {
				validator: function (array) {
					return array && array.length > 0;
				},
				message: 'there must be at least 1 category',
			},
		},
		popularity: { type: Number },
		active: { type: Boolean },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const restaurantModel = model('restaurants', restaurantSchema);
export default restaurantModel;
