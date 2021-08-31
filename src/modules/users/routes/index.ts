import { Router } from 'express'
import UsersController from '../controllers/UsersController';

const UserRoutes = Router()

UserRoutes.post('/user', UsersController.create);
UserRoutes.get('/user', UsersController.read);
UserRoutes.put('/user/:id', UsersController.update);
UserRoutes.delete('/user/:id', UsersController.delete);

export default UserRoutes;