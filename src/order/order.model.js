const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
	productID: { type: Schema.Types.ObjectId, required: true },
	amount: { type: Number, default: 1, min: 1 },
});

const orderSchema = new Schema(
	{
		restaurantID: { type: Schema.Types.ObjectId, required: true },
		clientID: { type: Schema.Types.ObjectId, required: true },
		domiciliaryID: { type: Schema.Types.ObjectId, required: true },
		state: {
			type: String,
			required: true,
			enum: [
				'ceado',
				'enviado',
				'aceptado',
				'recibido',
				'en direccion',
				'realizado',
			],
		},
		items: {
			type: [itemSchema],
			required: true,
			validate: {
				validator: function (array) {
					return array && array.length > 0;
				},
				message: 'there must be at least 1 item',
			},
		},
		active: { type: Boolean },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const orderModel = model('orders', orderSchema);
export default orderModel;
