import { Router } from 'express'
import { Auth } from '../../../../shared/middlewares/auth';
import AuthController from '../controllers/AuthController';
import UsersController from '../controllers/UsersController';

const UserRoutes = Router()

UserRoutes.post('/user', Auth, UsersController.create);
UserRoutes.get('/user', Auth, UsersController.read);
UserRoutes.put('/user/:id', UsersController.update);
UserRoutes.delete('/user/:id', UsersController.delete);

UserRoutes.post('/login', AuthController.login);
UserRoutes.post('/verify-token', AuthController.validate);
export default UserRoutes;