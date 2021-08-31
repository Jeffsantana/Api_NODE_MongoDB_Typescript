import { Request, Response } from 'express'
import User from '../models/UsersModel';

class UserController {
    public async read(req: Request, res: Response): Promise<Response> {
        const users = await User.paginate()
        return res.json(users)
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const { name, email, roles, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).send({
                message:
                    'Missing form data. Please fill all the form fields and try again or contact support.',
            });
        }
        if (await User.findOne({ email })) {
            return res
                .status(400)
                .send({ message: 'Email already registered.' });
        }
        const user = await User.create(req.body);
        user.password = undefined
        return res.status(201).json(user);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { name, email, password, active, phone_number } = req.body;

        if (!name || !email || !password) {
            return res.status(400).send({
                message:
                    'Missing form data. Please fill all the form fields and try again or contact support.',
            });
        }
        if (await User.findOne({ _id: { $ne: req.params.id }, email })) {
            return res
                .status(400)
                .send({ message: 'Email already registered.' });
        }
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            {
                active,
                name,
                email,
                phone_number,
            },
            { new: true }
        );

        return res.status(204);
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            return res.send(user);
        } catch (err) {
            return res.status(400).send({
                message: 'Error deleting user. Please try again or contact support.',
            });
        }
    }


}

export default new UserController()