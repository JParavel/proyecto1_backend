import { Router } from 'express';
import {
	createUser,
	readUserID,
	readUserMail,
	updateUser,
	deleteUser,
} from './user.controller';

const userRouter = Router();

userRouter.post('/', createUser);
userRouter.get('/:_id', readUserID);
userRouter.get('/:mail/:password', readUserMail);
userRouter.patch('/:_id', updateUser);
userRouter.delete('/:_id', deleteUser);

export default userRouter;
