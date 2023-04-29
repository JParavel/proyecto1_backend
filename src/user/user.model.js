import { Schema, model } from 'mongoose';

const userSchema = new Schema(
	{
		mail: { type: String, required: true, unique: true },
		name: { type: String, required: true },
		password: { type: String, required: true },
		phone: { type: String, required: true, unique: true },
		address: { type: String, required: true },
		role: {
			type: String,
			default: 'cliente',
			enum: ['cliente', 'domiciliario', 'administrador'],
		},
		active: { type: Boolean },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const userModel = model('users', userSchema);
export default userModel;
