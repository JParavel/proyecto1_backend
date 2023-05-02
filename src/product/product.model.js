import { Schema, model } from 'mongoose';

const productSchema = new Schema(
	{
		restaurantID: { type: Schema.Types.ObjectId, required: true },
		name: { type: String, required: true },
		description: { type: String, required: true },
		category: { type: String, required: true },
		price: { type: Number, required: true, min: 1 },
		active: { type: Boolean },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const productModel = model('products', productSchema);
export default productModel;
