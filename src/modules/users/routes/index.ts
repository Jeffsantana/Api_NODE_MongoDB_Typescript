import { Router } from 'express'
import AuthController from '../controllers/AuthController';
import UsersController from '../controllers/UsersController';

const UserRoutes = Router()

UserRoutes.post('/user', UsersController.create);
UserRoutes.get('/user', UsersController.read);
UserRoutes.put('/user/:id', UsersController.update);
UserRoutes.delete('/user/:id', UsersController.delete);

UserRoutes.post('/login', AuthController.login);
UserRoutes.post('/verify-token', AuthController.validate);
export default UserRoutes;